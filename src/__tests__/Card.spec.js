import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Card, {Wrapper} from "../components/Card";
import {planetMock} from "../__mocks__/responseMock";
import Loader from "../components/Loader";
import Body from "../components/Card/Body";

describe('Card Component', () => {

    const card = shallow(<Card isLoading={true} planet={planetMock}/>);

    it('renders properly', () => {
        expect(toJson(card)).toMatchSnapshot();
    });

    it('renders the Loader Component', () => {

        expect(card.find(<Loader/>)).toBeTruthy();
    });

    it('renders the "Not Found" error message', () => {

        const card = shallow(<Card isError={true} planet={planetMock}/>);

        expect(card.find('h1').childAt(0).text()).toEqual('Not found');
    });

    it('renders the card with the info', () => {

        const card = shallow(<Card isLoading={false} planet={planetMock}/>);

        expect(card.find(<Body planet={planetMock}/>)).toBeTruthy();
    });

});