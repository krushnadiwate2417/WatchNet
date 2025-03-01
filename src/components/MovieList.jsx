import { imgURL } from "../utils/constants";
import { useState,useRef } from "react";

const MovieList = ({title,movies})=>{

    if(!movies) return;
    const [left,setLeft] = useState("visibilityClass");
    const [right,setRight] = useState("visibilityClass");

    const scroller = useRef(null);

    const handleClickLeft = ()=>{
        console.log(scroller.current)
        if (scroller.current) {
            scroller.current.scrollLeft -= 300; 
          }
    }

    const handleClickRight = ()=>{
        if(scroller.current){
            scroller.current.scrollLeft += 300;
        }
    }

    return(

        <>
           <div className="movieListMainTopDiv">
            <div>
                <h1 className="listTitle">{title}</h1>
            </div>
            <div className="movieListDiv" onTouchMove={(e)=>{e.stopPropagation()}}>
                {
                    movies.map((movie,index)=>{
                        return <div className="movieCards" ref={scroller}>
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