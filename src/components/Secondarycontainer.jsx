import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const Secondarycontainer = ()=>{

    const {nowPlaying,popular,topRated,upcoming} = useSelector((store)=>store.movies);

    return (
        <>
            <div className="secContainer">
                <div className="moviesDivList">
                    <MovieList title={"Now Playing"} movies={nowPlaying}/>
                    <MovieList title={"Popular"} movies={popular}/>
                    <MovieList title={"Top Rated"} movies={topRated}/>
                    <MovieList title={"Upcoming"} movies={upcoming}/>
                </div>
            </div>
        </>
    )
}

export default Secondarycontainer;