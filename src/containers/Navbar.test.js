import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe("Navbar Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Navbar />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})