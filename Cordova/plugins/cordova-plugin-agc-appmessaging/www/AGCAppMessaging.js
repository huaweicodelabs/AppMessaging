"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = exports.setDisplayLocation = exports.setForceFetch = exports.addListener = exports.isFetchMessageEnable = exports.isDisplayEnable = exports.setDisplayEnable = exports.setFetchMessageEnable = exports.PictureMessage = exports.BannerMessage = exports.CardMessage = exports.DismissType = exports.TestFlag = exports.Location = exports.MessageType = exports.Events = void 0;
/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
const utils_1 = require("./utils");
var enums_1 = require("./enums");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return enums_1.Events; } });
Object.defineProperty(exports, "MessageType", { enumerable: true, get: function () { return enums_1.MessageType; } });
Object.defineProperty(exports, "Location", { enumerable: true, get: function () { return enums_1.Location; } });
Object.defineProperty(exports, "TestFlag", { enumerable: true, get: function () { return enums_1.TestFlag; } });
Object.defineProperty(exports, "DismissType", { enumerable: true, get: function () { return enums_1.DismissType; } });
var cardMessage_1 = require("./cardMessage");
Object.defineProperty(exports, "CardMessage", { enumerable: true, get: function () { return cardMessage_1.CardMessage; } });
var bannerMessage_1 = require("./bannerMessage");
Object.defineProperty(exports, "BannerMessage", { enumerable: true, get: function () { return bannerMessage_1.BannerMessage; } });
var pictureMessage_1 = require("./pictureMessage");
Object.defineProperty(exports, "PictureMessage", { enumerable: true, get: function () { return pictureMessage_1.PictureMessage; } });
function setFetchMessageEnable(enabled) {
    return __awaiter(this, void 0, void 0, function* () {
        return utils_1.asyncExec("AGCAppMessaging", "setFetchMessageEnable", [enabled]);
    });
}
exports.setFetchMessageEnable = setFetchMessageEnable;
function setDisplayEnable(enabled) {
    return __awaiter(this, void 0, void 0, function* () {
        return utils_1.asyncExec("AGCAppMessaging", "setDisplayEnable", [enabled]);
    });
}
exports.setDisplayEnable = setDisplayEnable;
function isDisplayEnable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield utils_1.asyncExec("AGCAppMessaging", "isDisplayEnable", []);
        return result.value;
    });
}
exports.isDisplayEnable = isDisplayEnable;
function isFetchMessageEnable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield utils_1.asyncExec("AGCAppMessaging", "isFetchMessageEnable", []);
        return result.value;
    });
}
exports.isFetchMessageEnable = isFetchMessageEnable;
function addListener(event, callback) {
    window.subscribeAGCEvent(event, callback);
    return utils_1.asyncExec("AGCAppMessaging", "addListener", [event]);
}
exports.addListener = addListener;
function setForceFetch() {
    return utils_1.asyncExec("AGCAppMessaging", "setForceFetch", []);
}
exports.setForceFetch = setForceFetch;
function setDisplayLocation(location) {
    return utils_1.asyncExec("AGCAppMessaging", "setDisplayLocation", [location]);
}
exports.setDisplayLocation = setDisplayLocation;
function trigger(eventId) {
    return utils_1.asyncExec("AGCAppMessaging", "trigger", [eventId]);
}
exports.trigger = trigger;
//# sourceMappingURL=AGCAppMessaging.js.map
