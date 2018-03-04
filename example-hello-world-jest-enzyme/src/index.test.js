import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<div>
      <h1>lol</h1>  
    </div>);
    expect(wrapper.contains("lol")).to.equal(true);
  });
});
