import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-p3.herokuapp.com'
    //baseURL: 'http://localhost:3333'
});

export default api;