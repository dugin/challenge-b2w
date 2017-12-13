import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow, mount} from 'enzyme';
import {Home, mapStateToProps} from "../pages/Home";
import {planetMock} from "../__mocks__/responseMock";
import {mock} from '../__mocks__/axiosMock'
import Button from "../components/Button";

describe('Home Component', () => {

    const props = {
        planet: planetMock,
        location: {pathname: '/'},
        dispatch: jest.fn()
    };

    const home = shallow(<Home {...props}/>);

    it('renders properly and fetches all planets when on route "/"', () => {
        expect(toJson(home)).toMatchSnapshot();
    });

    it('fetches one planet when on route "planet/:id" ', () => {
        const props = {
            planet: planetMock,
            location: {pathname: '/planet/1'},
            dispatch: jest.fn()
        };
        const home = shallow(<Home {...props}/>);

        expect(toJson(home)).toMatchSnapshot();
    });


    it('fetches all planets when clicks on Next and no planet amount available ', () => {
        const props = {
            planet: planetMock,
            location: {pathname: '/planet/1'},
            history: '',
            dispatch: jest.fn()
        };
        const home = mount(<Home {...props}/>);

        home.find(Button).simulate('click');

        expect(toJson(home)).toMatchSnapshot();
    });

    it('fetches one specific planet when clicks on Next and amount is available ', () => {
        const props = {
            planet: planetMock,
            location: {pathname: '/'},
            history: '',
            planetID: 1,
            dispatch: jest.fn()
        };
        const home = mount(<Home {...props}/>);

        home.find(Button).simulate('click');

        expect(toJson(home)).toMatchSnapshot();
    });

    it('mapStateToProps properly', () => {


        expect(mapStateToProps({
            planets: {
                planet: planetMock,
                isPending: false,
                isDone: true,
                error: null,
                amount: 0
            }
        })).toEqual({
                planet: planetMock,
                planetID: false,
                isLoading: false,
                error: false
            });
    });
});