import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice( {
    name: "app",
    initialState: {
        isMenuOpen: false,
        isUserLoggedIn: false,
        videoData: [],
        videoID: "",
    },
    reducers: {
        toggleMenu : (state) => {
            state.isMenuOpen= !state.isMenuOpen;
        },
        toggleLogIn : (state) => {
            state.isUserLoggedIn= !state.isUserLoggedIn;
        },

        storeData : (state, action) => {
           state.videoData= action.payload;
        },

        updateID : (state, action) => {
            state.videoID = action.payload;
        }
    },
});

export const { toggleMenu, toggleLogIn, storeData, updateID } = appSlice.actions;
export default appSlice.reducer;
