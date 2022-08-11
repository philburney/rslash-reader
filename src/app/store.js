import { configureStore } from '@reduxjs/toolkit';
import articlePreviewsReducer from '../features/articlePreviews/articlePreviewsSlice';

export const store = configureStore({
  reducer: {
    articlePreviews:articlePreviewsReducer,
    
  },
});
