import axios from "axios";

class BaseService {

    constructor() {
        this.baseUrl = 'http://localhost:8000/'
        // this.baseUrl = 'https://runnerscucuta.com:8000/'
        this.apiHelper = axios.create({
            baseURL: this.baseUrl,
            timeout: 10000,
        });
    }
}

export default BaseService;