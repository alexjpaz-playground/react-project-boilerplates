import React from 'react';
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<div>
      <h1>lol</h1>  
    </div>);
    expect(wrapper.contains("lol")).toEqual(true);
  });
});
