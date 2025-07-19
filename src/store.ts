import { configureStore } from '@reduxjs/toolkit';
import selectedIdReducer from './store/selectedIdSlice';
import selectedBlogReducer from './store/selectedBlogSlice';

export const store = configureStore({
  reducer: {
    name: selectedIdReducer,
    selectedBlog: selectedBlogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 