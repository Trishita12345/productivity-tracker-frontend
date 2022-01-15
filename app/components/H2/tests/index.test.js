/**
 * Testing our H2 component
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import H2 from '../index';
import { VARIANTS } from '../../../utils/constants/variants';
import StyledH2 from '../StyledH2';

configure({ adapter: new Adapter() });

describe('<H2 />', () => {
  const props = {
    label: 'Label',
  };

  const ComponentRenderer = myProps => {
    const component = shallow(<H2 {...myProps} />);
    return component;
  };

  it('should H2 renders', () => {
    const component = ComponentRenderer(props);
    expect(component).toBeDefined();
    expect(component.find(StyledH2).text()).toEqual('Label');
  });
  it('should renders primary as default', () => {
    const component = ComponentRenderer(props);
    expect(component.find(StyledH2).prop('variant')).toEqual(VARIANTS.PRIMARY);
    expect(component).toMatchSnapshot();
  });
  it('should renders secondary variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.SECONDARY,
    });
    expect(component.find(StyledH2).prop('variant')).toEqual(
      VARIANTS.SECONDARY,
    );
    expect(component).toMatchSnapshot();
  });
  it('should renders Tertiary variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.TERTIARY,
    });
    expect(component.find(StyledH2).prop('variant')).toEqual(VARIANTS.TERTIARY);
    expect(component).toMatchSnapshot();
  });
});
