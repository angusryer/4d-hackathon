import React from 'react';
import '../VideoPlayer/VideoPlayer.scss';
import Video from '../../assets/video/adidas-video.mp4';

function VideoPlayer() {
    return (
        <>
            <div className="video-player">
                <div className="video-player__container">
                    <video id="videoID" className="video-player__video"
                        controls autoplay="true"
                        src={Video}
                    />
                </div>
            </div>
        </>
    )
}

export default VideoPlayer;