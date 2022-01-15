/**
 * Testing our Button component
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../index';
import { VARIANTS } from '../../../utils/constants/variants';
import StyledButton from '../StyledButton';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const onClick = jest.fn();
  const props = {
    onButtonClick: onClick,
    children: 'Click Me',
  };

  const ComponentRenderer = myProps => {
    const component = shallow(<Button {...myProps} />);
    return component;
  };

  it('should Button renders', () => {
    const component = ComponentRenderer(props);
    expect(component).toBeDefined();
    expect(component.find(StyledButton).prop('onClick')).toEqual(onClick);
    expect(component.find(StyledButton).text()).toEqual('Click Me');
  });
  it('should renders primary as default', () => {
    const component = ComponentRenderer(props);
    expect(component.find(StyledButton).prop('variant')).toEqual(
      VARIANTS.PRIMARY,
    );
    expect(component).toMatchSnapshot();
  });
  it('should renders secondary if passed as variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.SECONDARY,
    });
    expect(component.find(StyledButton).prop('variant')).toEqual(
      VARIANTS.SECONDARY,
    );
    expect(component).toMatchSnapshot();
  });
});
