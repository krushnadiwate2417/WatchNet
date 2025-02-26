
import { useEffect } from "react";
import {options} from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlaying} from "../utils/movieSlice"

const useNowMovies = (url,method)=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchingMovies();
    },[])

    const fetchingMovies =async ()=>{
        try {
            const response = await fetch(url,options);
            const jsonRes = await response.json();
            dispatch(method(jsonRes.results))
            console.log(jsonRes.results);
        } catch (error) {
            console.log(error);
        }
    }

}

export default useNowMovies;