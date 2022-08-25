//This is the Article Preview Slice.

//Import the createSlice from redux
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



//This function loads the data from the API. 
export const loadAllPreviews = createAsyncThunk(
    'articlePreviews/loadAllPreviews',
    async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    }
  );


// Call the slice something slice. It should call the createSlice Function. 
//The function needs an object passed to it. The object should consist of
//  1. the name of the slice 
//  2. The initialState. This is an object. This will be the setting up of the variables you want in your slice
//  3. reducers: This is an object. The object will contain all the reducers that are needed to run. For example Add item, remove item, clear all items.
// 4. If you are using an API call you can add extra reducers.

export const articlePreviewsSlice = createSlice ({
    name:'articlePreviews',
    initialState: {
    articles:[
        // {
        //     title:"",
        //     permalink:"",
        //     thumbnail:"",
        //     id:""
        // }
    ],
    isloadingArticlePreviews: false,
    hasError:false,
    sectionTitle:"",
    sectionUrl:"https://www.reddit.com/r/popular.json",
    inSearch:false
    },
    reducers: {
        //Allows the title and URL to be saved
        setSectionTitleAndURL: (state, action) => {
          const {newTitle,newURL}  = action.payload;
          state.sectionTitle = newTitle;
          state.sectionUrl=newURL;
          
        },   
        //Allows the setInSearch to be set to true or false
        setInSearch: (state,action) => {
            state.inSearch=action.payload;
        },  
      },
    extraReducers: (builder) => {
            builder
              .addCase(loadAllPreviews.pending, (state) => {
                state.isLoadingArticlePreviews = true;
                state.hasError = false;
              })
              .addCase(loadAllPreviews.fulfilled, (state, action) => {
                state.isLoadingArticlePreviews = false;
                 //This is some initialisation
                const dataReturned=action.payload;
                const articleArray=[];
                let incomingThumb="";
                let incomingTitle ="";
                let incomingLink="";
                let incomingSub ="";
                let incomingid="";
                 //This is picking out the data and creating an array of objects. Each object will have a title, thumbnail, permalink to the article and the subbreddit
                //The JSON return all the Articles 
                const numberOfTiles =dataReturned.data.children.length ;
                
                for (let i=0;i<numberOfTiles;i++) {
                    //These are extracting the data needed from the JSON 
                    incomingTitle = dataReturned.data.children[i].data.title;
                    incomingLink =  "https://reddit.com" + dataReturned.data.children[i].data.permalink;
                    incomingThumb = dataReturned.data.children[i].data.thumbnail;
                    incomingSub= "r/" + dataReturned.data.children[i].data.subreddit;  
                    incomingid=dataReturned.data.children[i].data.id;
                    //This is checking that the picture is really a picture. If not it returns it to null
                    if (!incomingThumb.startsWith("https://"))
                        {incomingThumb="";}
                    
                    //This is where I add the object to the array as part of the for loop
                    articleArray.push({
                        title: incomingTitle,
                        thumbnail: incomingThumb,
                        permalink: incomingLink,
                        subreddit: incomingSub,
                        id: incomingid,
                    });
                    state.articles=articleArray;
     };
    
              })
              .addCase(loadAllPreviews.rejected, (state, action) => {
                state.isLoadingArticlePreviews = false;
                state.hasError = true;
                state.articles = [];
              })
          },
        });
          
 

// The export is really important and consists of the following:

//This is a view of the state. That is a subset of the information. It should start with the word select. It takes the state and returns a subset of the state which can be used in the logic components. In this example I have 2 select states one returning the articles and one returning the value for isLoading which is a Boolean value.

export const selectAllPreviews = state => state.articlePreviews.articles;
export const isLoading = state => state.articlePreviews.isLoadingArticlePreviews;
export const selectTitle = state => state.articlePreviews.sectionTitle;
export const URL = state => state.articlePreviews.sectionUrl;
export const selectInSearch = state => state.articlePreviews.inSearch;

//This is the export of the reducer that needs to then be imported by the store.js Note the word reducer is singular!
export default articlePreviewsSlice.reducer;

export const {setSectionTitleAndURL, setBackButton, setInSearch} = articlePreviewsSlice.actions;


