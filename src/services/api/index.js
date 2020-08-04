import axios from 'axios';

export const client  = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        Accept: 'application/json',
    }
});

export function setAxiosHeader(token) {
	client.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function revokeAxiosHeader() {
	client.defaults.headers.common.Authorization = null;
}
