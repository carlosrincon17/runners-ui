import axios from "axios";

class BaseService {

    constructor() {
        this.apiHelper = axios.create({
            baseURL: 'http://127.0.0.1:8000/',
            timeout: 10000,
        });
    }
}

export default BaseService;