const TODO_API_ENDPOINT = '/api';

function getEndpointUrl(url = '') {
    return TODO_API_ENDPOINT + url;
}

function getHeaders(hasBody = false) {
    let user = localStorage.getItem('user');
    let token = localStorage.getItem('token');

    let bearerToken = user && token ? 'Bearer ' + token : '';
    let contentType = hasBody ? 'application/json' : '';

    return {
        'Content-Type': contentType,
        'Authorization': bearerToken,
    };
}

export default class ApiService {

    async doGet(url = '') {
        const response = await fetch(getEndpointUrl(url), {
            headers: getHeaders(),
        });

        if (response.status >= 400) {
            throw new Error(`Error during request. Url: ${url}`);
        }

        return await response.json();
    }

    async doPost(url = '', data = {}) {
        const response = await fetch(getEndpointUrl(url), {
            method: 'POST',
            headers: getHeaders(true),
            body: JSON.stringify(data)
        });

        if (response.status >= 400) {
            return await Promise.reject(new Error(`Error during request. Url: ${url}, data: ${data}`));
        }

        return await Promise.resolve(response);
    }

    async doDelete(url = '') {
        const response = await fetch(getEndpointUrl(url), {
            method: 'DELETE',
            headers: getHeaders(),
        });

        if (response.status >= 400) {
            return await Promise.reject(new Error(`Error during request. Url: ${url}.`));
        }

        return await Promise.resolve(response);
    }

    async doPut(url = '', data = {}) {
        const response = await fetch(getEndpointUrl(url), {
            method: 'PUT',
            headers: getHeaders(true),
            body: JSON.stringify(data)
        });

        if (response.status >= 400) {
            throw new Error(`Error during request. Url: ${url}, data: ${data}`);
        }

        return await response.json();
    }
}
