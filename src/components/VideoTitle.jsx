

const VideoTitle = ({title,overview})=>{
    return (
        <>
        <div className="videoTitle-main-div">
            <h1>{title}</h1>
            <p>{overview}</p>
            <div>
                <button className="playBtn">Play</button>
                <button className="infoBtn">More info</button>
            </div>
        </div>
        </>
    )
}

export default VideoTitle;