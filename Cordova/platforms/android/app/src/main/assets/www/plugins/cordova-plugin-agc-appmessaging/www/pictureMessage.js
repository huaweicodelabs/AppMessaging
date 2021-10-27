cordova.define("cordova-plugin-agc-appmessaging.pictureMessage", function(require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureMessage = void 0;
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
const appMessage_1 = require("./appMessage");
const enums_1 = require("./enums");
class PictureMessage extends appMessage_1.AppMessage {
    constructor(params) {
        super(params.base);
        this.picture = new Picture(params.picture);
    }
    getPicture() {
        return this.picture;
    }
    getMessageType() {
        return enums_1.MessageType.PICTURE;
    }
}
exports.PictureMessage = PictureMessage;
class Picture {
    constructor(params) {
        this.pictureURL = params.pictureURL;
        this.actionURL = params.actionURL;
    }
    getPictureUrl() {
        return this.pictureURL;
    }
    getActionUrl() {
        return this.actionURL;
    }
}
//# sourceMappingURL=pictureMessage.js.map

});
