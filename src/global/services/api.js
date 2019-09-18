import axios from 'axios';

export default axios.create({
    baseURL: '',
    headers:{
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
    }
});