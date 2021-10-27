cordova.define("cordova-plugin-agc-appmessaging.cardMessage", function(require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardMessage = void 0;
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
class CardMessage extends appMessage_1.AppMessage {
    constructor(params) {
        super(params.base);
        this.card = new Card(params.card);
    }
    getCard() {
        return this.card;
    }
    getMessageType() {
        return enums_1.MessageType.CARD;
    }
}
exports.CardMessage = CardMessage;
class Card {
    constructor(params) {
        this.title = params.title;
        this.titleColor = params.titleColor;
        this.titleColorOpenness = params.titleColorOpenness;
        this.body = params.body;
        this.bodyColor = params.bodyColor;
        this.bodyColorOpenness = params.bodyColorOpenness;
        this.backgroundColor = params.backgroundColor;
        this.backgroundColorOpenness = params.backgroundColorOpenness;
        this.portraitPictureURL = params.portraitPictureURL;
        this.landscapePictureURL = params.landscapePictureURL;
        this.majorButton = new Button(params.majorButton);
        this.minorButton = new Button(params.minorButton);
    }
    getTitle() {
        return this.title;
    }
    getTitleColor() {
        return this.titleColor;
    }
    getTitleColorOpenness() {
        return this.titleColorOpenness;
    }
    getBody() {
        return this.body;
    }
    getBodyColor() {
        return this.bodyColor;
    }
    getBodyColorOpenness() {
        return this.bodyColorOpenness;
    }
    getBackgroundColor() {
        return this.backgroundColor;
    }
    getBackgroundColorOpenness() {
        return this.backgroundColorOpenness;
    }
    getPortraitPictureUrl() {
        return this.portraitPictureURL;
    }
    getLandscapePictureUrl() {
        return this.landscapePictureURL;
    }
    getMajorButton() {
        return this.majorButton;
    }
    getMinorButton() {
        return this.minorButton;
    }
}
class Button {
    constructor(params) {
        this.text = params.text;
        this.textColor = params.textColor;
        this.textColorOpenness = params.textColorOpenness;
        this.actionURL = params.actionURL;
    }
    getText() {
        return this.text;
    }
    getTextColor() {
        return this.textColor;
    }
    getTextColorOpenness() {
        return this.textColorOpenness;
    }
    getActionUrl() {
        return this.actionURL;
    }
}
//# sourceMappingURL=cardMessage.js.map

});
