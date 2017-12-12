import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Footer, {Wrapper} from "../components/Footer";

describe('App Component', () => {

    const footer = shallow(<Footer/>);

    it('renders properly', () => {
        expect(toJson(footer)).toMatchSnapshot();
    });

    it('should contain the text Developed by Rodrigo Dugin', () => {

        expect(footer.find(Wrapper).childAt(0).text()).toEqual('Developed by Rodrigo Dugin');
    });
});