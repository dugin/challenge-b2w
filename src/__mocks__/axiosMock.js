import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {planetMock} from "./responseMock";

export const mock = new MockAdapter(axios);

export const URL = 'https://swapi.co/api/';

mock.onGet(`${URL}planets/`).reply(200, {amount: 50, planet: planetMock, isDone: true});

mock.onGet(`${URL}planets/1/`).reply(200, {data: planetMock});


