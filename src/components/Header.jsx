import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import imgId from"../imgs/logo.png"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removerUser } from "../utils/userSlice";
import { showGpt } from "../utils/gptSlice";

const Header = ()=>{

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)

    const handleClickHeader=()=>{
        if(pathname === "/browse"){
            signOut(auth).then().catch()
        }
    }

    const handleGpt = ()=>{
        dispatch(showGpt());
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
            <div className={pathname === "/browse" ? "header-main-div-2" :"header-main-div"}>
                <div className="logo-div"> 
                    <img src={imgId} alt="logoImg" width={350}/>
                </div>
                <div className="headerBtnsDiv">
                    {   user && 
                    <div className="gpt-button-div">
                        <button onClick={handleGpt}>
                            GPT Search
                        </button>
                    </div>
                    }
                    <Link to={pathname === "/" ? "/login" : "/"}>
                    <button className="header-btn" onClick={handleClickHeader}>{pathname === "/" ? "Sign In" : pathname === "/browse" ? "Sign Out" : "Sign Up"}</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;