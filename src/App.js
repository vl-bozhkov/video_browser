import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCwR5tSATefd16dnYHa3tc80eXDRluT830';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Lebron James');
  }

  videoSearch(video) {
    YTSearch({key: API_KEY, term: video}, (data) => {
      this.setState({
        videos:data,
        selectedVideo: data[0]
      })
    });
  }
  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={(video) => this.videoSearch(video)}/>
        <div className="row">  
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
          onVideoSelect={(video) => this.setState({selectedVideo: video})}
          videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
