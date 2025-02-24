import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import imgId from"../imgs/logo.png"

const Header = ()=>{

    const {pathname} = useLocation();
    return (
        <>
            <div className="header-main-div">
                <div className="logo-div"> 
                    <img src={imgId} alt="logoImg" width={350}/>
                </div>
                <div>
                    <Link to={pathname === "/" ? "/login" : "/"}>
                    <button className="header-btn">{pathname === "/" ? "Sign In" : "Sign Up"}</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;