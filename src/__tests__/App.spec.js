import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import App from "../App";

describe('App Component', () => {

    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(toJson(app)).toMatchSnapshot();
    });
});