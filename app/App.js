import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Photos from './components/Photos';

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
      <div className="container">
        <SearchBar _getPhotos={this.handleGetPhotos}/>
        <Photos data={this.state.photos}/>
        <Footer />
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
