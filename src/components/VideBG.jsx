import {options} from "./../utils/constants"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import useTrailerMovie from "../hooks/useTrailerMovie";



const VideoBG = ({movie_id})=>{             

        useTrailerMovie(movie_id);
        const trailer = useSelector(store=> store.movies.trailerVideo)
        // if(!trailer) return;

    return (
        <>
            <div>
            <iframe 
                className="iframeVideo" 
                src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&playsinline=1&loop=1&playlist="+trailer?.key} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" >
            </iframe>
            </div>
        </>
    )
}

export default VideoBG;