

const VideoTitle = ({title,overview})=>{
    return (
        <>
        <div className="videoTitle-main-div">
            <div><h1>{title}</h1></div>
            <div className="videoTitleP"><p>{overview}</p></div>
            <div>
                <button className="playBtn">Play</button>
                <button className="infoBtn">More info</button>
            </div>
        </div>
        </>
    )
}

export default VideoTitle;