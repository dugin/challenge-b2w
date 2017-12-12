import {GET_PLANETS, GET_PLANET} from "./planet.type";

export const initialState = {
    isPending: false,
    isDone: false,
    error: null,
    amount: 0,
    planet: {}
};

export const planetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLANETS.PENDING:
            return {
                ...state,
                isPending: true,
                isDone: false,
                error: null,
            };
        case GET_PLANETS.FULFILLED:
            return {
                ...state,
                planet: action.payload.data.results[0],
                amount: action.payload.data.count,
                isPending: false,
                isDone: true,
                error: null,
            };
        case GET_PLANETS.REJECTED:
            return {
                ...state,
                error: action.payload,
                isPending: false,
                isDone: true
            };

        case GET_PLANET.PENDING:
            return {
                ...state,
                isPending: true,
                isDone: false,
                error: null,
            };
        case GET_PLANET.FULFILLED:
            return {
                ...state,
                planet: action.payload.data,
                isPending: false,
                isDone: true,
                error: null,
            };
        case GET_PLANET.REJECTED:
            return {
                ...state,
                error: action.payload,
                isPending: false,
                isDone: true
            };

        default :
            return state;
    }

};

