import {GET_PLANETS, GET_PLANET} from "./planet.type";
import * as swAPI from '../api/index';

export const fetchPlanets = () => {
    return {
        type: GET_PLANETS.BASE,
        payload: swAPI.getPlanets()
    }
};

export const fetchPlanet = (id) => {
    return {
        type: GET_PLANET.BASE,
        payload: swAPI.getPlanet(id)
    }
};