import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const Secondarycontainer = ()=>{

    const {nowPlaying,popular,topRated,upcoming,tvTopRated,tvPopular,tvAir} = useSelector((store)=>store.movies);
    return (
        <>
            <div className="secContainer">
                <div className="moviesDivList">
                    <div><MovieList title={"Now Playing"} movies={nowPlaying}/></div>
                    <div><MovieList title={"Popular"} movies={popular}/></div>
                    <div><MovieList title={"Top Rated Movies"} movies={topRated}/></div>
                    {/* <MovieList title={"Upcoming"} movies={upcoming}/> */}
                </div>
                <div className="seriesListDiv">
                    <h1>Series</h1>
                    <div><MovieList title={"Top Rated Series"} movies={tvTopRated} /></div>
                    <div><MovieList title={"Popular Series"} movies={tvPopular} /></div>
                    <div><MovieList title={"On Air Series"} movies={tvAir} /></div>
                </div>
            </div>
        </>
    )
}

export default Secondarycontainer;