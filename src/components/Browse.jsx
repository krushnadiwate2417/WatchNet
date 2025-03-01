import { useEffect } from "react";
import Header from "./Header";
import useNowMovies from "./../hooks/useNowMovies"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import { popularURL, topRatedURL, tvAirURL, tvPopularURL, tvTopRatedURL, upComingURL, url } from "../utils/constants";
import { addNowPlaying, addPopular, addTopRated, addTvAir, addTvPopular, addTvTopRated, addUpcoming } from "../utils/movieSlice";


const Browse = ()=>{

    useNowMovies(url,addNowPlaying);
    useNowMovies(popularURL,addPopular);
    useNowMovies(topRatedURL,addTopRated);
    useNowMovies(upComingURL,addUpcoming);
    useNowMovies(tvTopRatedURL,addTvTopRated);
    useNowMovies(tvPopularURL,addTvPopular);
    useNowMovies(tvAirURL,addTvAir);
    
    return (
        <>
            <div className="browseDiv">
                <div><Header/></div>
                <Maincontainer/>
                <Secondarycontainer/>
            </div>
        </>
    )
}

export default Browse;