import { api } from "../../api/api";
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = ( ) => {

    return async(dispatch) => {
        dispatch(checkingCredentials());
    }

}
 
export const startLoginWithEmailAndPassword = ({email, password}) => {

    return async(dispatch) => {

        dispatch(checkingCredentials())

        try{
            const response = await api.post('/auth/login', {email, password})

            switch(response.status) {

                case 200:
                    dispatch(login(response.data))
                    break;
                

                default:
                    dispatch(logout(response.data.message))
                    break;
                    
                }

        } catch (error) {

            switch (error.response.status) {

                case 400:
                    dispatch(logout({responseError: error.response.data.message}))
                    // deleteToken();
                    break;
                
            }
        }



        
    }

}

export const startLogoutWithToken = () => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

        try {

            const response = await api.post('/auth/logout')

            switch(response.status) {
                case 200:
                    dispatch(logout({errorMessage: 'Logout successful'}))
                    deleteToken()
                    break;
            }
        } catch (error) {

            console.log(error)

        }

    }

}

export const getAuthenticatedUser = () => {

    return async(dispatch) => {

        dispatch(checkingCredentials())

        try {

            const response = await api.get('/auth/user')
            
            switch(response.status) {
                case 200:
                    dispatch(login(response.data))
                    break;

            }

        } catch (error) {

            dispatch(logout({errorMessage: error.message}))
        }

    }

}

export const verifyToken = (token) => {

    return async(dispatch) => {

        dispatch(checkingCredentials())

        // try {
            
        // } catch (error) {
            
        // }

    }}


