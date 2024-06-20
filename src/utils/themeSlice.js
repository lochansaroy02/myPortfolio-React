import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeState: false
    },
    reducers: {

        changeTheme: (state, action) => {
            state.themeState = action.payload;
        }
    }

})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;