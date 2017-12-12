import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Home from "../pages/Home";

describe('App Component', () => {

    const home = shallow(<Home/>);

    it('renders properly', () => {
        expect(toJson(home)).toMatchSnapshot();
    });
});