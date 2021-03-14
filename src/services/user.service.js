import axios from "axios";
import BaseService from "./base.service";

class UserService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'users';
    }

    createUser(userData) {
        return this.apiHelper.post(this.moduleUrl, userData);
    }
}

export default UserService;