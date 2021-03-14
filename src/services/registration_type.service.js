import axios from "axios";
import BaseService from "./base.service";

class RegistrationTypeService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'registration-type';
    }

    getRegistrationTypes() {
        return this.apiHelper.get(this.moduleUrl);
    }
}

export default RegistrationTypeService;