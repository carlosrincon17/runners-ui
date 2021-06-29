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

    uploadFile(id, data) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + LocalStorageUtil.getItem(LocalStorageUtil.TOKEN_KEY)
            }
        }
        const formData = new FormData();
        formData.append('file', data.file)
        return this.apiHelper.post(`${this.moduleUrl}/${id}/upload-payment`, formData, config);
    }

    approve(id) {
        return this.apiHelper.put(`${this.moduleUrl}/${id}/approve-payment`, {}, {
            headers: {'Authorization': 'Bearer ' + LocalStorageUtil.getItem(LocalStorageUtil.TOKEN_KEY)}
        });
    }

    getPreviewUrl(id) {
        return `${this.baseUrl}${this.moduleUrl}/${id}/payment`;
    }
}

export default EventRegistrationService;