import React from 'react'
import { shallow } from 'enzyme';
import {render, unmountComponentAtNode} from 'react-dom'

describe('Component', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
        <div className="unique" />
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });
})
