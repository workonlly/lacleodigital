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
    setBlog(state, action: PayloadAction<BlogData>) {
      if (state) {
        state.heading = action.payload.heading;
        state.description = action.payload.description;
        state.imageUrl = action.payload.imageUrl;
        // Copy other fields as needed
      } else {
        // @ts-expect-error: Immer allows this assignment
        return action.payload;
      }
    },
    clearBlog() {
      return null;
    }
  }
});

export const { setBlog, clearBlog } = selectedBlogSlice.actions;
export default selectedBlogSlice.reducer; 