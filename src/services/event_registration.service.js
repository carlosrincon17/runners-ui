import BaseService from "./base.service";

class EventRegistrationService extends BaseService {

    constructor() {
        super();
        this.moduleUrl = 'event-registration';
    }

    getSummary() {
        return this.apiHelper.get(`${this.moduleUrl}/summary`);
    }
}

export default EventRegistrationService;