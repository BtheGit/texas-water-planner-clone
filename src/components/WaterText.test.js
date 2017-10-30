import React from 'react';
import ReactDOM from 'react-dom';
import WaterText from './WaterText';
import { shallow } from 'enzyme';

describe("WaterText Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<WaterText>Hello</WaterText>)
  });

  it('renders without crashing',);
})


//getBoundingClientRect doesn't work with jsdom