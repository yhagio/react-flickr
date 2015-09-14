import React from 'react';

class Photos extends React.Component{
  render() {

    var photoNodes = this.props.data.map(function (photo) {
      let source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

      let title = `${photo.title}`;

      return (
        <a href={source} target="_blank" className="imageBox">
          <img src={source} alt={title} className="photoImage"/>
        </a>
      );
    });

    return (
      <div className="photoList">
        {photoNodes}
      </div>
    );
  }
};

export default Photos;
