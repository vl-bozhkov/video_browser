import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
    return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col s12 m12 l8">
            <div className="video-container">
                <iframe  src={url} frameBorder="0" allowFullScreen></iframe>
            </div>
             <div className="card-panel">
                <p>{video.snippet.title}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;