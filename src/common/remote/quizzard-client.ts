import axios from "axios";

export const quizzardClient = axios.create({
    baseURL: 'http://localhost:5000/quizzard',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
