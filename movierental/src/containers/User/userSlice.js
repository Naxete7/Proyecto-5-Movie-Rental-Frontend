
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      credentials: {}
    },
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      userout: (state, action) => {
        localStorage.removeItem('SAVEJWT')
        localStorage.removeItem('SAVEUSERROLE')
        localStorage.removeItem('SAVEUSERMAIL')
        return {
          ...state,
          ...action.payload,
        }

      }
      
    }
    
});

export const { login, userout } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;