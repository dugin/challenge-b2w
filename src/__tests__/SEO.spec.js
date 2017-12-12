import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import App from "../App";
import SEO from "../components/SEO";

describe('App Component', () => {

    const seo = shallow(<SEO/>);

    it('renders properly', () => {
        expect(toJson(seo)).toMatchSnapshot();
    });
});