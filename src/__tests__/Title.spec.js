import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Title from "../components/Card/Title";
import {planetMock} from "../__mocks__/responseMock";

describe('Card Component', () => {

    const title = shallow(<Title text={planetMock.name}/>);

    it('renders properly', () => {
        expect(toJson(title)).toMatchSnapshot();
    });
});