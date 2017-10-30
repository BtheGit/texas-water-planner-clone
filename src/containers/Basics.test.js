import React from 'react';
import ReactDOM from 'react-dom';
import Basics from './Basics';
import { shallow } from 'enzyme';

describe("Basics Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Basics />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})