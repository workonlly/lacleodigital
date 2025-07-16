import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SelectedIdState {
  id: number | null;
}

const initialState: SelectedIdState = {
  id: 111,
};

const selectedIdSlice = createSlice({
  name: 'selectedId',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export const { setId } = selectedIdSlice.actions;
export default selectedIdSlice.reducer; 