
//import the configure store function (needed)
import { configureStore } from '@reduxjs/toolkit';

//This is an example of an import of the reducers created by a Slice. All reducers need to be imported so that the store knows what they are.
//This will import all the reducers for that slice. 
//It will be named "nameofSlice" + Reducer and imported from  the Slice 
import articlePreviewsReducer from '../features/articlePreviews/articlePreviewsSlice';
import articleReducer from '../features/articles/articleSlice';

//This is where the store is configured. Add any reducers to the object
export const store = configureStore({
  reducer: {
    articlePreviews:articlePreviewsReducer, //This store only has one reducer but others can be added
    articles:articleReducer
  },
});
