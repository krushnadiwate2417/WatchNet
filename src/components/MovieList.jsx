import { imgURL } from "../utils/constants";
import { useState,useRef } from "react";

const MovieList = ({title,movies})=>{

    if(!movies) return;
    return(

        <>
           <div className="movieListMainTopDiv">
            <div>
                <h1 className="listTitle">{title}</h1>
            </div>
            <div className="movieListDiv" onTouchMove={(e)=>{e.stopPropagation()}}>
                {
                    movies.map((movie,index)=>{
                        return <div key={index} className="movieCards">
                            <img src={imgURL+movie.poster_path} height={200}/>
                        </div>
                    })
                }
            </div>
           </div>
        </>
    )
}

export default MovieList;