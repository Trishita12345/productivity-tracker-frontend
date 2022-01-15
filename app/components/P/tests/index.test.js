/**
 * Testing our P component
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import P from '../index';
import { VARIANTS } from '../../../utils/constants/variants';
import StyledP from '../StyledP';

configure({ adapter: new Adapter() });

describe('<P />', () => {
  const props = {
    label: 'Label',
  };

  const ComponentRenderer = myProps => {
    const component = shallow(<P {...myProps} />);
    return component;
  };

  it('should P renders', () => {
    const component = ComponentRenderer(props);
    expect(component).toBeDefined();
    expect(component.find(StyledP).text()).toEqual('Label');
  });
  it('should renders primary as default', () => {
    const component = ComponentRenderer(props);
    expect(component.find(StyledP).prop('variant')).toEqual(VARIANTS.PRIMARY);
    expect(component).toMatchSnapshot();
  });
  it('should renders secondary variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.SECONDARY,
    });
    expect(component.find(StyledP).prop('variant')).toEqual(VARIANTS.SECONDARY);
    expect(component).toMatchSnapshot();
  });
  it('should renders Tertiary variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.TERTIARY,
    });
    expect(component.find(StyledP).prop('variant')).toEqual(VARIANTS.TERTIARY);
    expect(component).toMatchSnapshot();
  });
});
