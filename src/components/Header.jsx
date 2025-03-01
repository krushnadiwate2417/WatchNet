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
import { changeLang } from "../utils/langSlice";
import { languagesUsing } from "../utils/constants";
import lang from "../utils/langConst";

const Header = ()=>{

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    const selectedLang = useSelector(store=>store.lang.selectedLang);

    const handleClickHeader=()=>{
        if(pathname === "/browse" || pathname === "/gptSearch"){
            signOut(auth).then().catch()
        }
    }


    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email,displayName} = user;
                dispatch(addUser({uid,email,displayName}));
            }else{
                dispatch(removerUser());
                navigate("/")
            }
        })
    },[])


    const handleGpt = ()=>{
        if(pathname === "/gptSearch"){
            navigate("/browse");
        } else if (pathname === "/browse"){
            navigate("/gptSearch")
        }
    }

    const handleSelect = (e)=>{
        dispatch(changeLang(e.target.value))
    }

    return (
        <>
            <div className={pathname === "/browse" || pathname === "/gptSearch" ? "header-main-div-2" :"header-main-div"}>
                <div className="logo-div"> 
                    <img src={imgId} alt="logoImg" width={350}/>
                </div>
                <div className="headerBtnsDiv">
                   <Link>
                   {user && <div className="gpt-button-div">
                        <button onClick={handleGpt}>
                            {pathname === "/browse" ? "GPT Search" : "Home"}
                        </button>
                    </div>
                    }
                   </Link>
                    {pathname === "/browse" ? null :<div className="langSelector">
                        <select onChange={(e)=>{handleSelect(e)}}>
                            {languagesUsing.map((lang)=>{
                                return <option value={lang.languageName}>{lang.name}</option>
                            })}
                        </select>
                    </div>}
                    <Link to={pathname === "/" ? "/login" : "/"}>
                    {pathname === "/gptSearch" ? null : <div className="signBtnDiv">
                    <button className="header-btn" onClick={handleClickHeader}>{pathname === "/" ? lang[selectedLang].signIn : pathname === "/browse" || pathname === "/gptSearch" ? lang[selectedLang].signOut : lang[selectedLang].signUp}</button>
                    </div>}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;