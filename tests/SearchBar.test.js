'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SearchBar from '../app/components/SearchBar';

describe('SearchBar', ()=> {
  let component;

  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<SearchBar />);
  });

  it('should get input value', ()=> {
    component.refs.photoKeyword.value = 'Hello';
    let inputValue = ReactDOM.findDOMNode(component).childNodes[1].getElementByTagName('input').value = 'cat';
    console.log('inputValue: ', inputValue);
    debugger;
    let form = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
    TestUtils.Simulate.submit(form);
    console.log('KEY: ', component.refs.photoKeyword);
    expect(component.refs.photoKeyword).toEqual('');
  })

  // it('should fetch photos by handling submit function', ()=> {

  // });

});