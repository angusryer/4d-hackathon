import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../VideoPlayer/VideoPlayer.scss';
import Video from '../../assets/video/adidas-video.mp4'

function VideoPlayer() {
    return (
        <>
            <div className="video-player">
                <div className="video-player__container">
                    <video id="videoID" className="video-player__video"
                        controls autoplay
                        src={Video}
                    />
                </div>
            </div>
        </>
    )
}

export default VideoPlayer;

{/* <video id="videoID" className="video-player__video"
    controls autoplay
    poster={props.videoSelected.image}
    src={Video}
/> */}