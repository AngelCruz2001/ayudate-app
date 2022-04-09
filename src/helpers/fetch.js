import axios from "axios";

// const baseUrl = 'https://ayudat-backend.herokuapp.com/api';
const baseUrl = 'http://127.0.0.1:8000/api';

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    console.log(url)
    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}

const fetchConToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    console.log(url, method)

    if (method === 'GET') {
        return axios({
            method: method,
            headers: { 'Authorization': 'Bearer ' + token, },
            url: url,
            body: JSON.stringify(data)
        })
    } else {
        return axios({
            method: method,
            headers: { 'Authorization': 'Bearer ' + token, },
            url: url,
        })
    }
}
export {
    fetchSinToken,
    fetchConToken
};

