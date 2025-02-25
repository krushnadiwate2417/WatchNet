import {options} from "./../utils/constants"
import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useTrailerMovie = (movie_id)=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        trailerMovie();
    },[])
    
    const trailerMovie = async()=>{
        try{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,options);
                const jsonRes = await res.json();
                const trailer =  jsonRes.results.find((e)=>e.type == "Trailer");
                dispatch(addTrailer(trailer ? trailer : jsonRes.results[0]));
        }catch(err){
            console.log(err);
            return
        }
    }
}

export default useTrailerMovie;