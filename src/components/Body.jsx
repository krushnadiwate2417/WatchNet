import { useDispatch } from "react-redux";
import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removerUser } from "../utils/userSlice";


const Body = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

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
        <div className="body-main-div">
            <div>
                <Header/>
            </div>
            {
                pathname === "/" ? <SignUp/> : <SignIn/>
            }
        </div>
        </>
    )
}

export default Body;