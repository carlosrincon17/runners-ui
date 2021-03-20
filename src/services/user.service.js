import BaseService from "./base.service";
import LocalStorageUtil from "../util/localstorage.util";

class UserService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'users';
    }

    createUser(userData) {
        return this.apiHelper.post(this.moduleUrl, userData);
    }

    getUser() {
        return this.apiHelper.get(this.moduleUrl, {
            headers: {'Authorization': 'Bearer ' + LocalStorageUtil.getItem(LocalStorageUtil.TOKEN_KEY)}
        });
    }

    uploadFile(file) {
        return this.apiHelper.post()
    }
}

export default UserService;