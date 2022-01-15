import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledH1 from '../StyledH1';
import { VARIANTS } from '../../../utils/constants/variants';
import { COLORS } from '../../../utils/constants/colorCodes';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

describe('<StyledH1 />', () => {
  const props = { variant: VARIANTS.PRIMARY };

  const ComponentRenderer = myProps => {
    const component = mount(<StyledH1 {...myProps} />);
    return component;
  };

  it('should render with Primary variants', () => {
    const component = ComponentRenderer(props);
    expect(component).toHaveStyleRule('color', COLORS.DARK_VIOLET);
    expect(component).toMatchSnapshot();
  });
  it('should render with Secondary variants', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.SECONDARY,
    });
    expect(component).toHaveStyleRule('color', COLORS.WHITE);
    expect(component).toMatchSnapshot();
  });
  it('should render with Tertiary variants', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.TERTIARY,
    });
    expect(component).toHaveStyleRule('color', COLORS.DARK_GREY);
    expect(component).toMatchSnapshot();
  });
});
