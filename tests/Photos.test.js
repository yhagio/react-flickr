'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Photos from '../app/components/Photos';

describe('Photos', ()=> {
  let component;
  let photos = [{'id': '123ABC'}, {'id': '456DEF'}];

  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<Photos data={photos}/>);
  });

  it('should have childnodes length of 2', ()=> {
    expect(ReactDOM.findDOMNode(component).childNodes.length).toBe(2);
  });

});