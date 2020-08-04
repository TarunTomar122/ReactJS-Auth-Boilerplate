import {client} from '../api/index';

export async function login(data) {
    try {
        const response = await client.post('/user/login', data);
        return response.data.token;
    } catch (er) {
        throw new Error("Invalid Credentials");
    }
}

export async function register(data) {
    try {
        const response = await client.post('/user/register', data);
        return response.data.token;
    } catch (er) {
        throw new Error("Such credentials are not Accepted!");
    }
}
