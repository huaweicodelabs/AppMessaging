cordova.define("cordova-plugin-agc-appmessaging.appMessage", function(require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMessage = void 0;
class AppMessage {
    constructor(params) {
        this.id = params.id;
        this.startTime = params.startTime;
        this.endTime = params.endTime;
        this.frequencyType = params.frequencyType;
        this.frequencyValue = params.frequencyValue;
        this.testFlag = params.testFlag;
        this.triggerEvents = params.triggerEvents;
    }
    getId() {
        return this.id;
    }
    getStartTime() {
        return this.startTime;
    }
    getEndTime() {
        return this.endTime;
    }
    getFrequencyType() {
        return this.frequencyType;
    }
    getFrequencyValue() {
        return this.frequencyValue;
    }
    getTestFlag() {
        return this.testFlag;
    }
    getTriggerEvents() {
        return this.triggerEvents;
    }
}
exports.AppMessage = AppMessage;
//# sourceMappingURL=appMessage.js.map
});
