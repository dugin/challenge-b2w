import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Footer from "../components/Card/Footer";

describe('Card Component', () => {

    const footerCard = shallow(<Footer/>);

    it('renders properly', () => {
        expect(toJson(footerCard)).toMatchSnapshot();
    });
});