import { useRef, useState } from "react"
import { validate } from "../utils/validate";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import lang from "../utils/langConst";

const SignUp = ()=>{

    const [loaderState,setLoaderState] = useState(false)
    const [errMsg,setErrMsg] = useState("");
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const selectedLang = useSelector(store=>store.lang.selectedLang);


    const handleSignUp = ()=>{
        setLoaderState(true)
        const msg = validate(email.current.value,password.current.value);

        if(msg){
            setErrMsg(msg);
            setLoaderState(false); 
            return;
        };


        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((response)=>{
            setLoaderState(false)
            const user = response.user;
        }).catch((err)=>{
            setLoaderState(false)
            const errCode = err.code;
            const errMsg = err.message;
            setErrMsg(errCode);
        })
        

    }

    return (
        <>  
           {loaderState && < Loader/>}
            <div className="signUp-div">
                <div className="signUp-grid-div">
                    <div className="signUpH1">
                        <h1>{lang[selectedLang].firstH1} <br/>{lang[selectedLang].secondH1} </h1>
                    </div>
                    <form className="signUp-form-grid-div" onSubmit={(e)=>{e.preventDefault()}}>
                        <div>{errMsg && <p className="errorP">{errMsg}</p>}</div>
                        <div>
                            <input placeholder={lang[selectedLang].fullName} type="text" ref={fullName}/>
                        </div>
                        <div><input placeholder={lang[selectedLang].email} type="email" ref={email}/></div>
                        <div><input placeholder={lang[selectedLang].password} ref={password} type="password"/></div>
                        <div><button className="signUp-btn" onClick={handleSignUp}>{lang[selectedLang].signUp}</button></div> 
                    </form>
                </div>   
            </div>   
        </>
    )
}

export default SignUp