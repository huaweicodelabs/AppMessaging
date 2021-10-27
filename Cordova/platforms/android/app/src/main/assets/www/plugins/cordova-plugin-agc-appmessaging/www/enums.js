cordova.define("cordova-plugin-agc-appmessaging.enums", function(require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.DismissType = exports.TestFlag = exports.Location = exports.MessageType = void 0;
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
var MessageType;
(function (MessageType) {
    MessageType[MessageType["UN_SUPPORT"] = 0] = "UN_SUPPORT";
    MessageType[MessageType["CARD"] = 1] = "CARD";
    MessageType[MessageType["PICTURE"] = 2] = "PICTURE";
    MessageType[MessageType["BANNER"] = 3] = "BANNER";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var Location;
(function (Location) {
    Location[Location["BOTTOM"] = 0] = "BOTTOM";
    Location[Location["CENTER"] = 1] = "CENTER";
})(Location = exports.Location || (exports.Location = {}));
var TestFlag;
(function (TestFlag) {
    TestFlag[TestFlag["NON_TEST_MESSAGE"] = 0] = "NON_TEST_MESSAGE";
    TestFlag[TestFlag["TEST_MESSAGE"] = 1] = "TEST_MESSAGE";
})(TestFlag = exports.TestFlag || (exports.TestFlag = {}));
var DismissType;
(function (DismissType) {
    DismissType[DismissType["UNKNOWN_DISMISS_TYPE"] = 0] = "UNKNOWN_DISMISS_TYPE";
    DismissType[DismissType["CLICK"] = 1] = "CLICK";
    DismissType[DismissType["CLICK_OUTSIDE"] = 2] = "CLICK_OUTSIDE";
    DismissType[DismissType["BACK_BUTTON"] = 3] = "BACK_BUTTON";
    DismissType[DismissType["AUTO"] = 4] = "AUTO";
    DismissType[DismissType["SWIPE"] = 5] = "SWIPE";
})(DismissType = exports.DismissType || (exports.DismissType = {}));
var Events;
(function (Events) {
    Events["ON_MESSAGE_CLICK"] = "onMessageClick";
    Events["ON_MESSAGE_DISPLAY"] = "onMessageDisplay";
    Events["ON_MESSAGE_DISMISS"] = "onMessageDismiss";
    Events["ON_MESSAGE_ERROR"] = "onMessageError";
})(Events = exports.Events || (exports.Events = {}));
//# sourceMappingURL=enums.js.map

});
