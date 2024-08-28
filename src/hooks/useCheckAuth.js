import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "../api";
import { checkingCredentials, login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const token = localStorage.getItem('token');
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const shouldSkip = !token;



  const { data, isLoading, isSuccess, error } = useGetUserQuery( undefined, {
    skip: shouldSkip,
  });

  useEffect(() => {

    if(!token) {

      dispatch(logout({errorMessage: 'No hay token'}));
    
    }
    else {

      dispatch(checkingCredentials());
      if (error.status === 401) { 
        
        localStorage.removeItem('token');
        const message = error.message;
        dispatch(logout({ errorMesage: message }));
      }
  
      if (isSuccess) { 
        dispatch(login(data));
      }
    }

    
  }, [error, isSuccess, data, dispatch, token]); 

  return {
    status,
    isLoading,
  };
};