import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import imgId from"../imgs/logo.png"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removerUser } from "../utils/userSlice";

const Header = ()=>{

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickHeader=()=>{
        if(pathname === "/browse"){
            signOut(auth).then().catch()
        }
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email,displayName} = user;
                dispatch(addUser({uid,email,displayName}));
                navigate("/browse")
            }else{
                dispatch(removerUser());
                navigate("/")
            }
        })
    },[])

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