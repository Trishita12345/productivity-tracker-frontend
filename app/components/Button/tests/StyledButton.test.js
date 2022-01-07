import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledButton from '../StyledButton';
import { VARIANTS } from '../../../utils/constants/variants';
import { COLORS } from '../../../utils/constants/colorCodes';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

describe('<StyledButton />', () => {
  const props = { variant: VARIANTS.PRIMARY };

  const ComponentRenderer = myProps => {
    const component = mount(<StyledButton {...myProps} />);
    return component;
  };

  it('should render with primary variants', () => {
    const component = ComponentRenderer(props);
    expect(component).toHaveStyleRule('color', COLORS.WHITE);
    expect(component).toHaveStyleRule('background', COLORS.DARK_VIOLET);
    expect(component).toMatchSnapshot();
  });
  it('should render with secondary variants', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.SECONDARY,
    });
    expect(component).toHaveStyleRule('color', COLORS.DARK_GREY);
    expect(component).toHaveStyleRule('background', COLORS.LIGHT_GREY);
    expect(component).toMatchSnapshot();
  });
});
