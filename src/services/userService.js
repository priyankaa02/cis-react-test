export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    getLargestUnits,
    getLargestInvoice
};

const apiUrl = 'https://consumer-api.herokuapp.com'
const reportApi = 'https://cis-report-api.herokuapp.com'

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${apiUrl}/api/consumers/signin/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${apiUrl}/api/consumers/all`, requestOptions).then(handleResponse);
}

function getLargestUnits() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${reportApi}/api/largest/units`, requestOptions).then(handleResponse);
}

function getLargestInvoice() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${reportApi}/api/largest/invoice`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`${apiUrl}/api/consumers/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/api/consumers/signup`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // window.location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }
        console.log("api data",data)
        return data;
    });
}
