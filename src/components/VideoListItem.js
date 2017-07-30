import React from 'react';

const VidoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const title = props.video.snippet.title;
    return (
        <div className="card horizontal hoverable" onClick={() => props.selectedVideo(props.video)}>
           <div className="card-image">
                <img src={imageUrl}/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>{title}</p>
                </div>
            </div>
            {/* <img src={imageUrl} />
             <p >{title}</p> */}
        </div>
    );
}

export default VidoListItem;