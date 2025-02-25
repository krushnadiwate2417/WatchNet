
import { useEffect } from "react";
import {url,options} from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlaying} from "../utils/movieSlice"

const useNowMovies = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchingMovies();
    },[])

    const fetchingMovies =async ()=>{
        try {
            const response = await fetch(url,options);
            const jsonRes = await response.json();
            dispatch(addNowPlaying(jsonRes.results))

        } catch (error) {
            console.log(error);
        }
    }

}

export default useNowMovies;