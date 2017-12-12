import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Body from "../components/Card/Body";
import {planetMock} from "../__mocks__/responseMock";

describe('Card Component', () => {

    const body = shallow(<Body planet={planetMock}/>);
    const constants = ['POPULATION', 'CLIMATE', 'TERRAIN'];


    it('renders properly', () => {
        expect(toJson(body)).toMatchSnapshot();
    });


    it('should contain the array above', () => {
        const texts = body.find('p').map(node => node.text().trim().substring(0, node.text().indexOf(':') - 1));

        constants.forEach(c => expect(texts).toContain(c))
    });
});