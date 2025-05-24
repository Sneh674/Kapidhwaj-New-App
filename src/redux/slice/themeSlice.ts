// action , reducer, store
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'lightAlt',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        lightMode: (state) => {
            state.theme = 'light';
        },
        darkMode: (state) => {
            state.theme = 'dark';
        },
        lightAltMode: (state) => {
            state.theme = 'lightAlt';
        },
        darkAltMode: (state) => {
            state.theme = 'darkAlt';
        },
    },
});

export const { lightMode, darkMode } = themeSlice.actions;
export default themeSlice.reducer;

