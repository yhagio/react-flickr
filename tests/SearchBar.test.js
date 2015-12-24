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

  it('should fetch photos by handling submit function', ()=> {

  });

});