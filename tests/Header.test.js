'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from '../app/components/Header';

describe('Header', ()=> {
  let component;
  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<Header />);
  });

  it('should have "React Flickr" as the childnode innerHTML', ()=> {
    expect(ReactDOM.findDOMNode(component).childNodes[0].innerHTML).toEqual("React Flickr");
  });

});
