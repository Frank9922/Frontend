import { createSlice } from '@reduxjs/toolkit';
import { authenticated } from './authenticated';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: authenticated.notauthenticated,
        user: null,

        errorMessage:null,
        responseError:null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = authenticated.authenticated
            state.user = payload.user
            state.errorMessage = null
        },
        logout: (state, { payload }) => {
            state.user = null;
            state.status = authenticated.notauthenticated;

            state.responseError = payload?.responseError;
            state.errorMessage = payload?.errorMessage;
            
        },
        checkingCredentials: (state) => {
            state.status = authenticated.checking
        },
        resetResponseError: (state) => {
            state.responseError = null;
        }
     }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, resetResponseError } = authSlice.actions;
