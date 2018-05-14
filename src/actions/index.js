import axios from 'axios';

const API_KEY = '014387efe1193ed62ff16b45ab19a556';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // AJAX request using axios library
    const request = axios.get(url);

    //console.log('request:', request);

    return {
        // use a var instead of hardcoded string for ease of development/copy/paste
        type: FETCH_WEATHER,
        // returning promise as the payload
        payload: request
    };
}