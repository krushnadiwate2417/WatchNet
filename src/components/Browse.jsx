import { useEffect } from "react";
import Header from "./Header";
import useNowMovies from "./../hooks/useNowMovies"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";


const Browse = ()=>{

    useNowMovies();
    
    return (
        <>
            <div><Header/></div>
            <Maincontainer/>
            <Secondarycontainer/>
        </>
    )
}

export default Browse;