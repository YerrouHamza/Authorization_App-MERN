import axios from "axios";

// use the axios create method to have a base url for requests
const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

// use the axios interceptors to add the headers authorication token to auto all requests
api.interceptors.request.use(
    (config) => {
        const token_key = localStorage.getItem('token_key')
        if(token_key) {
            config.headers['Authorization'] = JSON.parse(token_key);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

// use axios interceptors to check if the response 401 for token not authorized
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if(error.response.status === 401) {
            localStorage.removeItem('token_key')
            delete api.defaults.headers.common['Authorization'];
            window.location.href = '/login'
        }

        return Promise.reject(error);
    }
)

export default api;