import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledButton from '../StyledButton';
import { VARIANTS } from '../../../utils/constants/variants';

configure({ adapter: new Adapter() });

describe('<StyledButton />', () => {
  const props = { variant: VARIANTS.PRIMARY };

  const ComponentRenderer = myProps => {
    const component = mount(<StyledButton {...myProps} />);
    return component;
  };

  it('should render with variants', () => {
    const component = ComponentRenderer(props);
    expect(component).toBeDefined();
  });
});
