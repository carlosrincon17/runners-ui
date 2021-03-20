import BaseService from "./base.service";

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
}

export default EventRegistrationService;