'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SearchBar from '../app/components/SearchBar';

describe('SearchBar', ()=> {
  let component, input, button;

  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<SearchBar />);
    input = component.refs.photoKeyword;
    button = component.refs.button;
  });

  it('should get input value', ()=> {
    input.value = 'cat';
    TestUtils.Simulate.change(input);
    expect(input.value).toEqual('cat');
  });

  it('should fetch data with user input', (done)=> {
    let apiKey = 'fda49c8cb3942dab1d64780f08ed71fe';
    let searchKeyword = 'cat';
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchKeyword}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        expect(data.photos.photo.length).toEqual(50);
        done();
      })
      .catch(error => {
        throw error;
      });
  });

  it('should throw error on incorrect API KEY', (done)=> {
    let apiKey = 'fda49c8cb3942dab1d64780f08ed71f';
    let searchKeyword = 'cat';
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchKeyword}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data.photos.photo);
      })
      .catch(error => {
        expect(error).toBeDefined();
        done();
      });
  });

  it('should receives zero photos of unmatched keywords', (done)=> {
    let apiKey = 'fda49c8cb3942dab1d64780f08ed71fe';
    let searchKeyword = '<script>aler(999);</script>';
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchKeyword}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        expect(data.photos.photo.length).toEqual(0);
        done();
      })
      .catch(error => {
        throw error;
      });
  });

});