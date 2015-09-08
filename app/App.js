import React from 'react';

class Hello extends React.Component{
  render(){
    return (
      <div>Hello React</div>
    )
  }
};

React.render(<Hello/>, document.getElementById('app'));
