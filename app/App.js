import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Photos from './components/Photos'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      photos: []
    };
    this.handleGetPhotos = this.handleGetPhotos.bind(this);
  }

  handleGetPhotos(photos){
    this.setState({'photos': photos});
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar _getPhotos={this.handleGetPhotos}/>
        <Photos data={this.state.photos}/>
      </div>
    )
  }
};

React.render(<App/>, document.getElementById('app'));
