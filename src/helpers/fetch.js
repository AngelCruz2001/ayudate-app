const baseUrl = 'https://ayudat-backend.herokuapp.com/api';

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
        return fetch(url, {
            method,
            headers: {
                Authentication: token
            }
        });
    } else {
        return fetch(url, {
            method,
            mode: 'no-cors',
            headers: {
                'Content-type': 'application/json',
                Authentication: token
            },
            body: JSON.stringify(data)
        });
    }
}
export {
    fetchSinToken,
    fetchConToken
};

