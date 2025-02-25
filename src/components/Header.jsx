import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import imgId from"../imgs/logo.png"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = ()=>{

    const {pathname} = useLocation();

    const handleClickHeader=()=>{
        if(pathname === "/browse"){
            signOut(auth).then().catch()
        }
    }

    return (
        <>
            <div className="header-main-div">
                <div className="logo-div"> 
                    <img src={imgId} alt="logoImg" width={350}/>
                </div>
                <div>
                    <Link to={pathname === "/" ? "/login" : "/"}>
                    <button className="header-btn" onClick={handleClickHeader}>{pathname === "/" ? "Sign In" : pathname === "/browse" ? "Sign Out" : "Sign Up"}</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;