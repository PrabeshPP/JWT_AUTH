import { NavLink } from "react-router-dom";

const NavBar=()=>{
    return <div className=" h-[10vh] w-[100%] flex flex-row justify-around bg-white shadow-xl">
            <NavLink to={"/"} className="h-[100%] w-[10%] text-2xl flex justify-center items-center font-bold">
                    JWT
            </NavLink>
            <div className="h-[100%] w-[60%] flex flex-row justify-center items-center">
                <NavLink to={"/secret"} className="h-[90%] w-[20%] flex justify-center items-center hover:text-white rounded-md text-lg font-bold hover:cursor-pointer hover:bg-purple-500  ">Secret</NavLink>
                <NavLink to={"/login"} className="h-[90%] w-[20%] flex justify-center items-center hover:text-white rounded-md text-lg font-bold hover:cursor-pointer hover:bg-purple-500 ">Login</NavLink>
            </div>
    </div>
}

export default NavBar;