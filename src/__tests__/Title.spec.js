import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Title from "../components/Card/Title";

describe('Card Component', () => {

    const title = shallow(<Title/>);

    it('renders properly', () => {
        expect(toJson(title)).toMatchSnapshot();
    });
});