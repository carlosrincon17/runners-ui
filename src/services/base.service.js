import axios from "axios";

class BaseService {

    constructor() {
        this.apiHelper = axios.create({
            baseURL: 'http://143.198.233.112:8000/',
            timeout: 10000,
        });
    }
}

export default BaseService;