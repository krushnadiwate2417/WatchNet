import { useEffect } from "react";
import Header from "./Header";
import useNowMovies from "./../hooks/useNowMovies"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import { popularURL, topRatedURL, upComingURL, url } from "../utils/constants";
import { addNowPlaying, addPopular, addTopRated, addUpcoming } from "../utils/movieSlice";
import Gpt from "./GPT";
import { useSelector } from "react-redux";


const Browse = ()=>{

    const gpt = useSelector(store => store.gpt.show)

    useNowMovies(url,addNowPlaying);
    useNowMovies(popularURL,addPopular);
    useNowMovies(topRatedURL,addTopRated);
    useNowMovies(upComingURL,addUpcoming);
    
    return (
        <>
            <div><Header/></div>
            {gpt && <Gpt/>}
            <Maincontainer/>
            <Secondarycontainer/>
        </>
    )
}

export default Browse;