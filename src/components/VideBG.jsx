import {options} from "./../utils/constants"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import useTrailerMovie from "../hooks/useTrailerMovie";



const VideoBG = ({movie_id})=>{             

        useTrailerMovie(movie_id);
        const trailer = useSelector(store=> store.movies.trailerVideo)
        // if(!trailer) return;

        console.log(trailer);
    return (
        <>
            <div>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/`+trailer?.key} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" >
            </iframe>
            </div>
        </>
    )
}

export default VideoBG;