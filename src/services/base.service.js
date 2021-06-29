import axios from "axios";

class BaseService {

    constructor() {
        this.baseUrl = 'http://localhost:8000/'
        // this.baseUrl = 'https://runnerscucuta.com:8000/'
        this.apiHelper = axios.create({
<<<<<<< HEAD
            baseURL: this.baseUrl,
=======
            baseURL: 'http://127.0.0.1:8000/',
>>>>>>> e29daffee21135bbe48caf655136357d72495837
            timeout: 10000,
        });
    }
}

export default BaseService;