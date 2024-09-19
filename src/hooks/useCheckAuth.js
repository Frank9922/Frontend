import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAuthenticatedUser, login, logout } from "../store/auth";
import Cookies from "js-cookie";

export const useCheckAuth = async() => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {




      dispatch(getAuthenticatedUser())

      
    

    // if(!token) { dispatch(logout({errorMessage: 'No hay token'})); }

    // else {

    //   dispatch(checkingCredentials());

    //   if(error) dispatch(logout({errorMessage: 'xd error xd'})); deleteToken();
      
    //   if(isSuccess) dispatch(login(data)); setToken(token) ;
     
    // }

    // error, isSuccess, data, dispatch, token, currentData
  }, []); 

  return {
    status,
  };
};

