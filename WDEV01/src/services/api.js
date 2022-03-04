import axios from 'axios';

const api = axios.create({

    baseURL: 'https://parseapi.back4app.com',
    //timeout: 1000,
    headers: {
        'X-Parse-Application-Id': 'WranaY9OdsOn0WTsrklSGDEUATSaG7TfViOGTqsB',
        'X-Parse-REST-API-Key': 'fqKuAXezGRZUIQBeDoeXDMFFKuKNWqY8VUG8xzYy'
    }

});

export default api;