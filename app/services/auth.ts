import { api } from './apiServices';

export const login = (body) => api.post('auth/login', body);

export const registration = (body) =>
    api.post('auth/registration', body);
