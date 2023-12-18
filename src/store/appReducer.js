import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dark: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const {toggleTheme} = appSlice.actions;

export default appSlice.reducer;
