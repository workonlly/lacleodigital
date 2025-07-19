import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BlogData {
  heading: string;
  description: string;
  imageUrl: string;
  // add other fields as needed
}

const initialState: BlogData | null = null;

const selectedBlogSlice = createSlice({
  name: 'selectedBlog',
  initialState,
  reducers: {
    setBlog(_state, action: PayloadAction<BlogData>): BlogData {
      return action.payload;
    },
    clearBlog(): null {
      return null;
    }
  }
});

export const { setBlog, clearBlog } = selectedBlogSlice.actions;
export default selectedBlogSlice.reducer; 