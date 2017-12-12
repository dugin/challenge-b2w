import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Card from "../components/Card";

describe('Card Component', () => {

    const card = shallow(<Card/>);


    it('renders properly', () => {
        expect(toJson(card)).toMatchSnapshot();
    });

});