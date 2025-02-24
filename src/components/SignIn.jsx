import { useRef ,useState} from "react";
import { validate } from "../utils/validate";

const SignIn = () =>{

    const [errMsg,setErrMsg] = useState("")

    const email = useRef(null);
    const password = useRef(null);

    const handleClick = ()=>{
        console.log(email.current.value);
        console.log(password.current.value);

       const msg =  validate(email.current.value,{password : password.current.value});
       setErrMsg(msg)
       console.log(msg)
    }

    return (
        <>
            <form className="signIn-div" onSubmit={(e)=>e.preventDefault()}>
                <h1>Sign In</h1>
                <div>
                    <input placeholder="Email Address" type="email" ref={email}/>
                    {errMsg && errMsg === "Email Not Valid" &&<p>{errMsg}</p>}
                </div>
                <div>
                    <input placeholder="Password" type="password" ref={password}/>
                    {errMsg && errMsg === "Password Not Valid" &&<p>{errMsg}</p>}
                </div>
                <button className="signIn-btn"  onClick={handleClick}>Sign In</button>
                <h4>___OR___</h4>
                <button className="code-btn">Use a Sign-in Code</button>
                <h5>Forgot Password ? </h5>
            </form>
        </>
    )

}

export default SignIn