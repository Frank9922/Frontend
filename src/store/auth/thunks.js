import { checkingCredentials } from "./authSlice"

export const startLoginWithEmailAndPassword = () => {

    return async(dispatch) => {

        dispatch( checkingCredentials() )

        
    }

}