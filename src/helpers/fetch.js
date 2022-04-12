import axios from "axios";


const baseUrl = 'https://ayudat-backend.herokuapp.com/api';

// const baseUrl = 'http://127.0.0.1:8000/api';
 
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
    console.log(method)
    if (method === 'GET') {
        console.log("CACA")
        return axios({
            method,
            headers: { 'Authorization': 'Bearer ' + token, },
            url: url,
        })
    } else {
        console.log("CACA")
        console.log(data)
        return axios({
            method,
            headers: { 
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json'
            },
            url: url,
            data: JSON.stringify(data)
        })
    }
}
export {
    fetchSinToken,
    fetchConToken
};








