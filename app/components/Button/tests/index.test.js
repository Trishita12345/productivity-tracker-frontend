/**
 * Testing our Button component
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const props = {
    onButtonClick: jest.fn(),
    children: 'Click Me',
  };

  const ComponentRenderer = myProps => {
    const component = shallow(<Button {...myProps} />);
    return component;
  };

  it('should Button renders', () => {
    const component = ComponentRenderer(props);
    expect(component).toBeDefined();
  });
});
