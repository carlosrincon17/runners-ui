import BaseService from "./base.service";

class AuthService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'auth';
    }

    authenticateUser(credentialsData) {
        return this.apiHelper.post(`${this.moduleUrl}/token` , credentialsData);
    }
}

export default AuthService;