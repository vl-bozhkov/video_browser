import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
            key={video.etag} 
            video={video}
            selectedVideo={props.onVideoSelect}
            />
        );
    });
    return (
        <ul className="col s12 m12 l4 ">
            {videoItems}
        </ul>
        
    );
}

export default VideoList;