import axios from "axios";

class BaseService {

    constructor() {
        this.apiHelper = axios.create({
            baseURL: 'http://localhost:8000/',
            timeout: 1000,
        });
    }
}

export default BaseService;