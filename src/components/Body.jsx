import Header from "./Header";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {useLocation} from "react-router-dom";


const Body = ()=>{

    const {pathname} = useLocation();
    

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