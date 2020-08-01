import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        Accept: 'application/json',
    }
});

export default client;