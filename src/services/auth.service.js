import BaseService from "./base.service";

class AuthService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'auth';
    }

    authenticateUser(credentialsData) {
        return this.apiHelper.post(`${this.moduleUrl}/token` , credentialsData);
    }

    recoveryPassword(recoveryPasswordData) {
        return this.apiHelper.post(`${this.moduleUrl}/recovery-password` , recoveryPasswordData);
    }

    validateToken(token) {
        return this.apiHelper.get(`${this.moduleUrl}/recovery-password/${token}`);
    }
}

export default AuthService;