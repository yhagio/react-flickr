import React from 'react';
import request from 'superagent';

class SearchBar extends React.Component{

  handleSubmit(e){
    e.preventDefault();
    let apiKey = 'fda49c8cb3942dab1d64780f08ed71fe';
    let searchKeyword = this.refs.photoKeyword.getDOMNode().value;
    this.refs.photoKeyword.getDOMNode().value = '';

    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=20&page=1&text=${searchKeyword}`;
    request
      .get(url)
      .end((err, res)=> {
        if (err) throw err;
        this.props._getPhotos(res.body.photos.photo);
      }.bind(this));
  }

  render(){
    return (
      <div className="">
        <h3>Search</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="" ref="photoKeyword" />
          <button type="submit" className="">Search on Flickr</button>
        </form>
      </div>
    )
  }
};

export default SearchBar;
