import { Outlet,Navigate } from "react-router";

const PrivateRoutes=()=>{
    const token=false;
    return(
        token? <Outlet/>:<Navigate to={'/login'}/>
    )
}

export default PrivateRoutes;