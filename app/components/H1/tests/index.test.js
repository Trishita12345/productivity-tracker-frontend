/**
 * Testing our H1 component
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import H1 from '../index';
import { VARIANTS } from '../../../utils/constants/variants';
import StyledH1 from '../StyledH1';

configure({ adapter: new Adapter() });

describe('<H1 />', () => {
  const props = {
    label: 'Label',
  };

  const ComponentRenderer = myProps => {
    const component = shallow(<H1 {...myProps} />);
    return component;
  };

  it('should H1 renders', () => {
    const component = ComponentRenderer(props);
    expect(component).toBeDefined();
    expect(component.find(StyledH1).text()).toEqual('Label');
  });
  it('should renders primary as default', () => {
    const component = ComponentRenderer(props);
    expect(component.find(StyledH1).prop('variant')).toEqual(VARIANTS.PRIMARY);
    expect(component).toMatchSnapshot();
  });
  it('should renders secondary variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.SECONDARY,
    });
    expect(component.find(StyledH1).prop('variant')).toEqual(
      VARIANTS.SECONDARY,
    );
    expect(component).toMatchSnapshot();
  });
  it('should renders Tertiary variant', () => {
    const component = ComponentRenderer({
      ...props,
      variant: VARIANTS.TERTIARY,
    });
    expect(component.find(StyledH1).prop('variant')).toEqual(VARIANTS.TERTIARY);
    expect(component).toMatchSnapshot();
  });
});
