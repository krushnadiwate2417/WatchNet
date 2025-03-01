import { useRef, useState } from "react"
import { validate } from "../utils/validate";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import lang from "../utils/langConst";

const SignUp = ()=>{

    const [loaderState,setLoaderState] = useState(false)

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const selectedLang = useSelector(store=>store.lang.selectedLang);


    const handleSignUp = ()=>{
        setLoaderState(true)
        const msg = validate(email.current.value,password.current.value);

        if(msg) return;


        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((response)=>{
            setLoaderState(false)
            const user = response.user;
            console.log(user);
        }).catch((err)=>{
            const errCode = err.code;
            const errMsg = err.message;

            console.log(`${errCode} : ${errMsg}`);
        })
        

    }

    return (
        <>  
           {loaderState && < Loader/>}
            <div className="signUp-div">
                <div className="signUp-grid-div">
                    <div>
                        <h1>Unlimited Movies,<br/>Web Series and TV Shows</h1>
                    </div>
                    <form className="signUp-form-grid-div" onSubmit={(e)=>{e.preventDefault()}}>
                        <input placeholder={lang[selectedLang].fullName} type="text" ref={fullName}/>
                        <input placeholder={lang[selectedLang].email} type="email" ref={email}/>
                        <input placeholder={lang[selectedLang].password} ref={password}/>
                        <button className="signUp-btn" onClick={handleSignUp}>{lang[selectedLang].signUp}</button> 
                    </form>
                </div>   
            </div>   
        </>
    )
}

export default SignUp