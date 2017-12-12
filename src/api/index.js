import axios from 'axios';

const METHOD = {
    GET: 'GET',
    HEAD: 'HEAD',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
    POST: 'POST',
};

export const api = {
    root: 'https://swapi.co/api/',
    call: async (url, method = METHOD.GET, data = {}) => {
        return await axios({
            method,
            url: `${api.root}${url}`,
            data
        })
    },

    get: async (url) => {
        return await api.call(url);
    }

};


export const getPlanets = () => {
    return api.get('planets');
};

export const getPlanet = (id) => {
    return api.get(`planets/${id}`);
};