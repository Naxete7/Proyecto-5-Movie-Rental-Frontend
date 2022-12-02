
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
 import filmSlice from '../containers/Films/FilmSlice.js';

export default configureStore({
    reducer: {
        user: userSlice,
        film: filmSlice
    }
    
});