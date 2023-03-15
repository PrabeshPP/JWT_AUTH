import { Outlet,Navigate } from "react-router";
import Cookies from "js-cookie";

const PrivateRoutes=()=>{

    const token=Cookies.get("jwt");
    return(
        token? <Outlet/>:<Navigate to={'/login'}/>
    )
}

export default PrivateRoutes;