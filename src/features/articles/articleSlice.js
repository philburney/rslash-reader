//This is the article slice

//import the createSlice

import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

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

             console.log(mediaLink.indexOf(".jpg"));
             console.log(mediaLink.indexOf(".png"));
             console.log(mediaLink.indexOf(".gif"));
             if(data[0].data.children[0].data.media !==null)
              {
              console.log(data[0].data.children[0].data.media.reddit_video.scrubber_media_url);
              state.imageURL=data[0].data.children[0].data.media.reddit_video.fallback_url;
             }
              else {
                state.imageURL=mediaLink;
              };

              for (let comment of data[1].data.children) {
                    comments.push(
                        {
                            body:comment.data.body,
                            author: comment.data.author

                        })
                    
                    
                };
              
            comments.pop();
            state.comments = comments;
             

          })
          .addCase(loadArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            
          })
      },
    });
      




export const selectComments = state => state.comments;
export const checkLoading = state => state.articles.isLoading;
export const selectArticle= state => state.articles;
export const selectActive = state => state.articles.active;


export default articleSlice.reducer;

export const {addArticle, setActive}=articleSlice.actions; 
