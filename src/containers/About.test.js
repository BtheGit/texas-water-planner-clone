import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { shallow } from 'enzyme';

describe("About Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<About />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})