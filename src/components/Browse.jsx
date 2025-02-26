import { useEffect } from "react";
import Header from "./Header";
import useNowMovies from "./../hooks/useNowMovies"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import { popularURL, topRatedURL, upComingURL, url } from "../utils/constants";
import { addNowPlaying, addPopular, addTopRated, addUpcoming } from "../utils/movieSlice";


const Browse = ()=>{

    useNowMovies(url,addNowPlaying);
    useNowMovies(popularURL,addPopular);
    useNowMovies(topRatedURL,addTopRated);
    useNowMovies(upComingURL,addUpcoming);
    
    return (
        <>
            <div><Header/></div>
            <Maincontainer/>
            <Secondarycontainer/>
        </>
    )
}

export default Browse;