import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },
    signOut: state => {
      state.user = null;
    },
  },
});

export const {updateUser, signOut} = authSlice.actions;

export default authSlice.reducer;
