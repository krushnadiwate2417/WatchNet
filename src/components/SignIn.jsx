import { useRef ,useState} from "react";
import { validate } from "../utils/validate";
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import lang from "../utils/langConst";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


const SignIn = () =>{

    const [loaderState,setLoaderState] = useState(false)

    const [errMsg,setErrMsg] = useState("")
    const selectedLang = useSelector(store=>store.lang.selectedLang);
    const user = useSelector(store=>store.user)
    const navigate = useNavigate();


    const email = useRef(null);
    const password = useRef(null);

    const handleClick = ()=>{
        setLoaderState(true)
       const msg =  validate(email.current.value,password.current.value);
       if(msg) return setErrMsg(msg);

       signInWithEmailAndPassword(auth,email.current.value,password.current.value)
       .then((response)=>{
            setLoaderState(false)
            const user = response.user;
            navigate("/browse")
            console.log(user);
       }).catch((err)=>{
            const errCode = err.code;
            const errMsg = err.message;
            setErrMsg(`${errCode},${errMsg}`);
       })

    }

    return (
        <>  
            {loaderState && <Loader/>}
            <form className="signIn-div" onSubmit={(e)=>e.preventDefault()}>
                <h1>Sign In</h1>
                <div>
                    <input placeholder={lang[selectedLang].email} type="email" ref={email}/>
                    {errMsg && errMsg === "Email Not Valid" &&<p>{errMsg}</p>}
                </div>
                <div>
                    <input placeholder={lang[selectedLang].password} type="password" ref={password}/>
                    {errMsg && errMsg === "Password Not Valid" &&<p>{errMsg}</p>}
                </div>
                <button className="signIn-btn"  onClick={handleClick}>{lang[selectedLang].signIn}</button>
                <h4>___OR___</h4>
                <button className="code-btn">Use a Sign-in Code</button>
                <h5>Forgot Password ? </h5>
            </form>
        </>
    )

}

export default SignIn