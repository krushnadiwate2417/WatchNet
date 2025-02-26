import { imgURL } from "../utils/constants";

const MovieList = ({title,movies})=>{

    if(!movies) return;

    return(

        <>
           <div className="movieListMainTopDiv">
            <div>
                <h1>{title}</h1>
            </div>
            <div className="movieListDiv">
                <div className="scrollBtnsDiv">
                    <button>LeftSIde</button>
                </div>
                {
                    movies.map((movie,index)=>{
                        return <div className="movieCards">
                            <img src={imgURL+movie.poster_path} height={200}/>
                        </div>
                    })
                }
                <div className="scrollBtnsDiv">
                    <button>RIghtSide</button>
                </div>
            </div>
           </div>
        </>
    )
}

export default MovieList;