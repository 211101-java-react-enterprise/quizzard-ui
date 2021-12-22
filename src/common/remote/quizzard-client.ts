import axios from "axios";

export const quizzardClient = axios.create({
    baseURL: 'http://quizzardapi-dev.eba-puyqjfxg.us-east-1.elasticbeanstalk.com/quizzard',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
