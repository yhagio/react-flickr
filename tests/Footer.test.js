'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../app/components/Footer';

describe('Footer', ()=> {
  let component;
  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<Footer />);
  });

  it('should have "React Flickr" as the childnode innerHTML', ()=> {
    expect(ReactDOM.findDOMNode(component).childNodes[0].innerHTML).toContain("Built with");
    expect(ReactDOM.findDOMNode(component).childNodes[0].innerHTML).toContain("Yuichi Hagio");
  });

});
