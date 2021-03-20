import BaseService from "./base.service";
import LocalStorageUtil from "../util/localstorage.util";

class EventRegistrationService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'event-registration';
    }

    getSummary() {
        return this.apiHelper.get(`${this.moduleUrl}/summary`);
    }

    getRegistrationByFilter(filter) {
        return this.apiHelper.post(`${this.moduleUrl}/filter`, filter);
    }

    getEventRegistration() {
        return this.apiHelper.get(`${this.moduleUrl}/`,{
            headers: {'Authorization': 'Bearer ' + LocalStorageUtil.getItem(LocalStorageUtil.TOKEN_KEY)}
        });
    }

    uploadFile(id) {
        return this.apiHelper.put(`${this.moduleUrl}/${id}/upload-payment`, {}, {
            headers: {'Authorization': 'Bearer ' + LocalStorageUtil.getItem(LocalStorageUtil.TOKEN_KEY)}
        });
    }
}

export default EventRegistrationService;