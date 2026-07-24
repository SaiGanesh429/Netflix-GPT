
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice.js';
import moviesSlice from "./moviesSlice.js";


const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice
  },
});

export default appStore;