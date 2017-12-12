import {initialState, planetReducer} from "../planet/planet.reducer";
import {GET_PLANETS, GET_PLANET} from "../planet/planet.type";
import {planetMock} from "../__mocks__/responseMock";


describe('planet reducer', () => {


    it('should return the initial state', () => {
        expect(planetReducer(undefined, {})).toEqual(initialState)
    });

    it('get a planet and the total amount from planets array', () => {
        expect(
            planetReducer(initialState,
                {
                    payload: {
                        data: {
                            results: [planetMock], count: 50
                        }
                    },
                    type: GET_PLANETS.FULFILLED
                },
            ))
            .toEqual(
                {
                    planet: planetMock,
                    amount: 50,
                    isPending: false,
                    isDone: true,
                    error: null,
                })
    });

    it('get pending status when fetching data', () => {
        expect(
            planetReducer(initialState,
                {
                    type: GET_PLANETS.PENDING
                },
            ))
            .toEqual(
                {
                    isPending: true,
                    isDone: false,
                    error: null,
                    amount: 0,
                    planet: {}
                });

        expect(
            planetReducer(initialState,
                {
                    type: GET_PLANET.PENDING
                },
            ))
            .toEqual(
                {
                    isPending: true,
                    isDone: false,
                    error: null,
                    amount: 0,
                    planet: {}
                })
    });

    it('get error status when problem on fetching data', () => {
        expect(
            planetReducer(initialState,
                {
                    payload: 'Erro message',
                    type: GET_PLANETS.REJECTED
                },
            ))
            .toEqual(
                {
                    error: 'Erro message',
                    isPending: false,
                    isDone: true,
                    amount: 0,
                    planet: {}
                });

        expect(
            planetReducer(initialState,
                {
                    payload: 'Erro message',
                    type: GET_PLANET.REJECTED
                },
            ))
            .toEqual(
                {
                    error: 'Erro message',
                    isPending: false,
                    isDone: true,
                    amount: 0,
                    planet: {}
                })
    });


    it('get one planet given an id', () => {
        expect(
            planetReducer(initialState,
                {
                    payload: {
                        data: planetMock
                    },
                    type: GET_PLANET.FULFILLED
                },
            ))
            .toEqual(
                {
                    planet: planetMock,
                    amount: 0,
                    isPending: false,
                    isDone: true,
                    error: null,
                })
    });


})