import axios from 'axios';
import React, { useState } from 'react'
import { implementSuccess, implementFailed } from '../../components/MessageSlice';
import { implementLoading } from '../../components/loadingSlice';
import { useAppDispatch } from "../hooks";
import { RestaurantRegistrationRequest } from '../../features/requests/RestaurantRegistrationRequest';
import { loginRequestType } from '../../features/requests/loginRequest';
import { default_base_url } from '../../env';
import { Link } from 'react-router-dom';
import { setAuthToken } from './setAuthToken';


const usePost=(url:string,values:any,onFinish:() => void)=> {


    const dispatch=useAppDispatch()
    const axiosPost=()=>{
    dispatch(implementLoading(true))
    axios
    .post(default_base_url+url, { ...values })
    .then((response) => {
        const token  =  response.data.jwt;
        localStorage.setItem("token",token);
        setAuthToken(token);
       dispatch(implementLoading(false))

        
onFinish();
window.location.href='/manageEmployees';


    }).catch(() => {
       dispatch(implementLoading(false))
       dispatch(implementFailed(true))
    

    });
}
    return axiosPost;
}

export default usePost

