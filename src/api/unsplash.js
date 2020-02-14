import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7d66da303f2a6f1fb0d058acc8691a3ae67565fa409bc4d949768f4f7bfc9189'
    }
})

export default unsplash;