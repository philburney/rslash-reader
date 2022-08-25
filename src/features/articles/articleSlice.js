//This is the article slice

//import the createSlice

import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

//Api to fetch the correct article from reddit

export const loadArticle = createAsyncThunk(
    'article/loadArticle',
    async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    }
  );

export const articleSlice = createSlice({
    name:'article',
    initialState: {
        title:"",
        imageURL:"",
        permalink:"",
        comments: [],
        author:"",
        subreddit:"",
        isLoading:false,
        hasError:false,
        active: false,
    },
    reducers: {
       //flag to show that an article is showing
      setActive: (state,action) => {
          state.active=action.payload;
      },
    },
   
    extraReducers: (builder) => {
        builder
          .addCase(loadArticle.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
          })
          .addCase(loadArticle.fulfilled, (state, action) => {
          
            state.isLoading = false;
            state.hasError = false;
            //This is some initialisation
            const data = action.payload;
            const comments=[];
            state.title = data[0].data.children[0].data.title;
            state.permalink=data[0].data.children[0].data.permalink;
            state.author=data[0].data.children[0].data.author;
            state.subreddit ="r/" + data[0].data.children[0].data.subreddit; 
            const mediaLink = data[0].data.children[0].data.url;
            //checking to see if there is media returned from the API 
             if(data[0].data.children[0].data.media !==null)
              {
               //set the imageURL to the video
              state.imageURL=data[0].data.children[0].data.media.reddit_video.fallback_url;
             }
              else {
                //set the imageURL to the image
                state.imageURL=mediaLink;
              };
              // Create an array of objects. Each object has the author and comment body.
              for (let comment of data[1].data.children) {
                    comments.push(
                        {
                            body:comment.data.body,
                            author: comment.data.author

                        })
                    
                    
                };
             //There seems to be an extra empty child at the end so this just removes it.
            comments.pop();
            state.comments = comments;
             

          })
          .addCase(loadArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            
          })
      },
    });
      


//Exporting out all the views

export const selectComments = state => state.comments;
export const checkLoading = state => state.articles.isLoading;
export const selectArticle= state => state.articles;
export const selectActive = state => state.articles.active;

//Export out the reducer for the app

export default articleSlice.reducer;

//Export out the actions for the use in other components

export const {addArticle, setActive}=articleSlice.actions; 
