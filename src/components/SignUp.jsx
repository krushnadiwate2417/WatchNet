import { useRef } from "react"
import { validate } from "../utils/validate";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/firebase";

const SignUp = ()=>{

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignUp = ()=>{
        const msg = validate(email.current.value,password.current.value);
        if(msg) return;


        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((response)=>{
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
            <div className="signUp-div">
                <div className="signUp-grid-div">
                    <div>
                        <h1>Unlimited Movies,<br/>Web Series and TV Shows</h1>
                    </div>
                    <form className="signUp-form-grid-div" onSubmit={(e)=>{e.preventDefault()}}>
                        <input placeholder="Full Name" type="text" ref={fullName}/>
                        <input placeholder="Enter your Email ID" type="email" ref={email}/>
                        <input placeholder="Password" type="password" ref={password}/>
                        <button className="signUp-btn" onClick={handleSignUp}>Let's Get Started</button> 
                    </form>
                </div>   
            </div>   
        </>
    )
}

export default SignUp