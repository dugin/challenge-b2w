import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Loader from "../components/Loader";

describe('Loader Component', () => {

    const loader = shallow(<Loader/>);

    it('renders properly', () => {
        expect(toJson(loader)).toMatchSnapshot();
    });


});