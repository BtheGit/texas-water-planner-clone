import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from './Collapsible';
import { shallow } from 'enzyme';

describe("Collapsible Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<Collapsible />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})