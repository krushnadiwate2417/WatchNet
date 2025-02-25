import VideoBG from "./VideBG";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux"



const Maincontainer = ()=>{

    
    const movies = useSelector(store => store.movies?.nowPlaying);
    if(!movies) return;

    const mainMovie = movies[0]
    console.log(mainMovie)
    const {original_title,overview} = mainMovie;

    return (
        <>
            <div>Main</div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBG movie_id={mainMovie.id}/>
        </>
    )
}

export default Maincontainer;