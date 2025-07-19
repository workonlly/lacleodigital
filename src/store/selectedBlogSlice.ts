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
    setBlog(state: BlogData | null, action: PayloadAction<BlogData>) {
      if (state) {
        state.heading = action.payload.heading;
        state.description = action.payload.description;
        state.imageUrl = action.payload.imageUrl;
        // Copy other fields as needed
      } else {
        // If state is null, mutate is not possible, so return void
        // Redux Toolkit will handle this as a no-op
      }
    },
    clearBlog() {
      return null;
    }
  }
});

export const { setBlog, clearBlog } = selectedBlogSlice.actions;
export default selectedBlogSlice.reducer; 