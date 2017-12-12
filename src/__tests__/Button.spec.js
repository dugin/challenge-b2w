import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Button from "../components/Button";

describe('Button Component', () => {

    const button = shallow(<Button/>);



    it('renders properly', () => {
        expect(toJson(button)).toMatchSnapshot();
    });
});