import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow, mount } from 'enzyme';
import Footer, {Content} from "../components/Card/Footer";
import {planetMock} from "../__mocks__/responseMock";

describe('Footer Card Component', () => {

    const footerCard = shallow(<Footer appearedInMovie={planetMock.films.length}/>);

    it('renders properly', () => {
        expect(toJson(footerCard)).toMatchSnapshot();
    });


    it('renders the text "FEATURED IN NO FILMS" ', () => {
        const footerCard = mount(<Footer appearedInMovie={0}/>);

         expect(footerCard.find('p').text()).toEqual('FEATURED IN NO FILMS');
    });

    it('renders the text "FEATURED IN 1 FILM" ', () => {
        const footerCard = mount(<Footer appearedInMovie={1}/>);

        expect(footerCard.find('p').text()).toEqual('FEATURED IN 1 FILM');
    });

    it('renders the text "FEATURED IN 2 FILMS" ', () => {
        const footerCard = mount(<Footer appearedInMovie={2}/>);

        expect(footerCard.find('p').text()).toEqual('FEATURED IN 2 FILMS');
    });

});