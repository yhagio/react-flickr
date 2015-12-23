'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Photos from '../app/components/Photos';

describe('Photos', ()=> {
  let component;
  let photos = [
    {
      'id': '23296310324', 
      'farm': 2,
      'server': '1462',
      'secret': 'a63a649a4c',
      'title': 'cat'
    }, 
    {
      'id': '23816226782', 
      'farm': 2,
      'server': '1512',
      'secret': '9135ac7e7a',
      'title': 'cat'
    }
  ];

  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<Photos data={photos}/>);
  });

  it('should have childnodes length of 2', ()=> {
    expect(ReactDOM.findDOMNode(component).childNodes.length).toBe(2);
  });

  it('should have correct reactid', ()=> {
    expect(ReactDOM.findDOMNode(component).childNodes[0].dataset.reactid).toContain('23296310324');
    expect(ReactDOM.findDOMNode(component).childNodes[1].dataset.reactid).toContain('23816226782');
  });

  it('should have correct soure url format', ()=> {
    expect(ReactDOM.findDOMNode(component).childNodes[0].href).toEqual('https://farm2.staticflickr.com/1462/23296310324_a63a649a4c.jpg');
    expect(ReactDOM.findDOMNode(component).childNodes[1].href).toEqual('https://farm2.staticflickr.com/1512/23816226782_9135ac7e7a.jpg');
  });

});