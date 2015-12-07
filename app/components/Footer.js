import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <footer>
        <p className="footerNote">
          Built with <span><img className="heartIcon" src={require("./iconmonstr-favorite-4-icon-24.png")} alt="heart icon" /></span> Yuichi Hagio
        </p>
      </footer>
    )
  }
};

export default Footer;
