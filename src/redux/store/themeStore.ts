import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from '../slice/themeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const themeStore = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof themeStore.getState>;
export type AppDispatch = typeof themeStore.dispatch;

//Typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
