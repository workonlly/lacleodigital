import { configureStore } from '@reduxjs/toolkit';
import  SelectedReducer from './selectedIdSlice'

export const store=configureStore({
    reducer:{
        name:SelectedReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;