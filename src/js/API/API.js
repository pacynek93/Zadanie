import axios from 'axios';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_URL = `${PROXY}https://alfa.propertygrouppoland.pl/q/patrykpacyna`;
const API = {};

API.ROUTES = {
    CREATE: '/create',
    GET: '/get',
    GET_ALL: '/getAll',
    UPDATE: '/update',
    DELETE: '/delete',
    DELETE_ALL: '/deleteAll'
};

API.GET = (route, callback) => axios.get(`${API_URL}${route}`, {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
}).then((response) => {
    callback({ data: response.data, status: response.status, statusText: response.statusText });
}).catch(error => console.log(error));

API.POST = (route, data, callback) => axios.post(`${API_URL}${route}`, JSON.stringify(data), {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
}).then((response) => {
    callback({ data: response.data, status: response.status, statusText: response.statusText });
}).catch(error => console.log(error));

export default API;
