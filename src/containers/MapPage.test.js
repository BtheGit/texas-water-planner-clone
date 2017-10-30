import React from 'react';
import ReactDOM from 'react-dom';
import MapPage from './MapPage';
import { shallow } from 'enzyme';

describe("MapPage Container", () => {
  let wrapper;

  beforeEach(()=>{
      wrapper = shallow(<MapPage />)
  });

  it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
  });
})