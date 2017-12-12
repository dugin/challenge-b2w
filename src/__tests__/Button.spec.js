import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow, mount} from 'enzyme';
import Button, {Wrapper} from "../components/Button";
import colors from "../styles/constants/colors";

describe('Button Component', () => {

    const button = shallow(<Button isLoading={true} onPress={jest.fn()} text={'Next'}/>);
    const wrapper = button.find(Wrapper);

    it('renders properly', () => {
        expect(toJson(button)).toMatchSnapshot();
    });

    it('should be disabled', () => {
        expect(wrapper).toHaveStyleRule('background-color', colors.pattensBlue);
        expect(wrapper).toHaveStyleRule('pointer-events', 'none');
    });

    it('should contain the text "Loading..."', () => {
        expect(wrapper.childAt(0).text()).toEqual('Loading... ');
    });

    it('click should trigger properly', () => {
        const button = mount(<Button onPress={jest.fn()} text={'Next'}/>);

        button.simulate('click');

        expect(button.props().onPress).toHaveBeenCalled();
    })
});