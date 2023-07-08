import axios, {AxiosError, CanceledError} from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'api-key': 'xyzKEY'
    }
});

export {CanceledError};

export {AxiosError};