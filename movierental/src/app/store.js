
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../containers/User/userSlice';
 import filmSlice from '../containers/FilmSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        film: filmSlice
    }
    
});