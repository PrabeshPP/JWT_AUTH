import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { setAuthToken } from "../../useAuthToken";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SecretPage=()=>{
    const token=Cookies.get("jwt");
    setAuthToken(token);
    const navigate=useNavigate();
    const [message,setMessage]=useState();
    const getSecret=useCallback(async()=>{
        try{
            const response=await axios.get("/secret-page");
            const data=response.data;
            setMessage(data.message);
        }catch (err){
            Cookies.remove("jwt");
            setAuthToken();
            navigate("/login");
        }
       
    },[])
    useEffect(()=>{
       getSecret()
    },[])
    return <div className="h-[90vh] w-[100%] text-3xl font-bold flex justify-center items-center">
        {message}
    </div>
}

export default SecretPage;