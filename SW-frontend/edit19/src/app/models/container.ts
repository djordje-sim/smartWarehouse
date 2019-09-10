export class Container {
    id: string;
    dateTime: string;
    healthStatus: string;
    fullness: string;

    constructor(id, dateTime, healthStatus, fullness) {
        this.id = id;
        this.dateTime = dateTime;
        this.healthStatus = healthStatus;
        this.fullness = fullness
    }
}