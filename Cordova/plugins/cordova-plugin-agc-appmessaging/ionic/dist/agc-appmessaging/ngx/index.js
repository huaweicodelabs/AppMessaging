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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AGCAppMessaging = /** @class */ (function (_super) {
    __extends(AGCAppMessaging, _super);
    function AGCAppMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AGCAppMessaging.prototype.setFetchMessageEnable = function (enabled) { return cordova(this, "setFetchMessageEnable", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.setDisplayEnable = function (enabled) { return cordova(this, "setDisplayEnable", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.isDisplayEnable = function () { return cordova(this, "isDisplayEnable", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.isFetchMessageEnable = function () { return cordova(this, "isFetchMessageEnable", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.addListener = function (event, callback) { return cordova(this, "addListener", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.setForceFetch = function () { return cordova(this, "setForceFetch", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.setDisplayLocation = function (location) { return cordova(this, "setDisplayLocation", { "otherPromise": true }, arguments); };
    AGCAppMessaging.prototype.trigger = function (eventId) { return cordova(this, "trigger", { "otherPromise": true }, arguments); };
    AGCAppMessaging.pluginName = "AGCAppMessaging";
    AGCAppMessaging.plugin = "appmessaging";
    AGCAppMessaging.pluginRef = "AGCAppMessaging";
    AGCAppMessaging.repo = "";
    AGCAppMessaging.platforms = ["Android", "iOS"];
    AGCAppMessaging = __decorate([
        Injectable()
    ], AGCAppMessaging);
    return AGCAppMessaging;
}(IonicNativePlugin));
export { AGCAppMessaging };
var AppMessage = /** @class */ (function () {
    function AppMessage(params) {
        this.id = params.id;
        this.startTime = params.startTime;
        this.endTime = params.endTime;
        this.frequencyType = params.frequencyType;
        this.frequencyValue = params.frequencyValue;
        this.testFlag = params.testFlag;
        this.triggerEvents = params.triggerEvents;
    }
    AppMessage.prototype.getId = function () {
        return this.id;
    };
    AppMessage.prototype.getStartTime = function () {
        return this.startTime;
    };
    AppMessage.prototype.getEndTime = function () {
        return this.endTime;
    };
    AppMessage.prototype.getFrequencyType = function () {
        return this.frequencyType;
    };
    AppMessage.prototype.getFrequencyValue = function () {
        return this.frequencyValue;
    };
    AppMessage.prototype.getTestFlag = function () {
        return this.testFlag;
    };
    AppMessage.prototype.getTriggerEvents = function () {
        return this.triggerEvents;
    };
    return AppMessage;
}());
export { AppMessage };
var BannerMessage = /** @class */ (function (_super) {
    __extends(BannerMessage, _super);
    function BannerMessage(params) {
        var _this = _super.call(this, params.base) || this;
        _this.banner = new Banner(params.banner);
        return _this;
    }
    BannerMessage.prototype.getBanner = function () {
        return this.banner;
    };
    BannerMessage.prototype.getMessageType = function () {
        return MessageType.BANNER;
    };
    return BannerMessage;
}(AppMessage));
export { BannerMessage };
var Banner = /** @class */ (function () {
    function Banner(params) {
        this.title = params.title;
        this.titleColor = params.titleColor;
        this.titleColorOpenness = params.titleColorOpenness;
        this.body = params.body;
        this.bodyColor = params.bodyColor;
        this.bodyColorOpenness = params.bodyColorOpenness;
        this.backgroundColor = params.backgroundColor;
        this.backgroundColorOpenness = params.backgroundColorOpenness;
        this.pictureURL = params.pictureURL;
        this.actionURL = params.actionURL;
    }
    Banner.prototype.getTitle = function () {
        return this.title;
    };
    Banner.prototype.getTitleColor = function () {
        return this.titleColor;
    };
    Banner.prototype.getTitleColorOpenness = function () {
        return this.titleColorOpenness;
    };
    Banner.prototype.getBody = function () {
        return this.body;
    };
    Banner.prototype.getBodyColor = function () {
        return this.bodyColor;
    };
    Banner.prototype.getBodyColorOpenness = function () {
        return this.bodyColorOpenness;
    };
    Banner.prototype.getBackgroundColor = function () {
        return this.backgroundColor;
    };
    Banner.prototype.getBackgroundColorOpenness = function () {
        return this.backgroundColorOpenness;
    };
    Banner.prototype.getPictureUrl = function () {
        return this.pictureURL;
    };
    Banner.prototype.getActionUrl = function () {
        return this.actionURL;
    };
    return Banner;
}());
export { Banner };
var CardMessage = /** @class */ (function (_super) {
    __extends(CardMessage, _super);
    function CardMessage(params) {
        var _this = _super.call(this, params.base) || this;
        _this.card = new Card(params.card);
        return _this;
    }
    CardMessage.prototype.getCard = function () {
        return this.card;
    };
    CardMessage.prototype.getMessageType = function () {
        return MessageType.CARD;
    };
    return CardMessage;
}(AppMessage));
export { CardMessage };
var Card = /** @class */ (function () {
    function Card(params) {
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
    Card.prototype.getTitle = function () {
        return this.title;
    };
    Card.prototype.getTitleColor = function () {
        return this.titleColor;
    };
    Card.prototype.getTitleColorOpenness = function () {
        return this.titleColorOpenness;
    };
    Card.prototype.getBody = function () {
        return this.body;
    };
    Card.prototype.getBodyColor = function () {
        return this.bodyColor;
    };
    Card.prototype.getBodyColorOpenness = function () {
        return this.bodyColorOpenness;
    };
    Card.prototype.getBackgroundColor = function () {
        return this.backgroundColor;
    };
    Card.prototype.getBackgroundColorOpenness = function () {
        return this.backgroundColorOpenness;
    };
    Card.prototype.getPortraitPictureUrl = function () {
        return this.portraitPictureURL;
    };
    Card.prototype.getLandscapePictureUrl = function () {
        return this.landscapePictureURL;
    };
    Card.prototype.getMajorButton = function () {
        return this.majorButton;
    };
    Card.prototype.getMinorButton = function () {
        return this.minorButton;
    };
    return Card;
}());
export { Card };
var Button = /** @class */ (function () {
    function Button(params) {
        this.text = params.text;
        this.textColor = params.textColor;
        this.textColorOpenness = params.textColorOpenness;
        this.actionURL = params.actionURL;
    }
    Button.prototype.getText = function () {
        return this.text;
    };
    Button.prototype.getTextColor = function () {
        return this.textColor;
    };
    Button.prototype.getTextColorOpenness = function () {
        return this.textColorOpenness;
    };
    Button.prototype.getActionUrl = function () {
        return this.actionURL;
    };
    return Button;
}());
export { Button };
var PictureMessage = /** @class */ (function (_super) {
    __extends(PictureMessage, _super);
    function PictureMessage(params) {
        var _this = _super.call(this, params.base) || this;
        _this.picture = new Picture(params.picture);
        return _this;
    }
    PictureMessage.prototype.getPicture = function () {
        return this.picture;
    };
    PictureMessage.prototype.getMessageType = function () {
        return MessageType.PICTURE;
    };
    return PictureMessage;
}(AppMessage));
export { PictureMessage };
var Picture = /** @class */ (function () {
    function Picture(params) {
        this.pictureURL = params.pictureURL;
        this.actionURL = params.actionURL;
    }
    Picture.prototype.getPictureUrl = function () {
        return this.pictureURL;
    };
    Picture.prototype.getActionUrl = function () {
        return this.actionURL;
    };
    return Picture;
}());
export { Picture };
export var MessageType;
(function (MessageType) {
    MessageType[MessageType["UN_SUPPORT"] = 0] = "UN_SUPPORT";
    MessageType[MessageType["CARD"] = 1] = "CARD";
    MessageType[MessageType["PICTURE"] = 2] = "PICTURE";
    MessageType[MessageType["BANNER"] = 3] = "BANNER";
})(MessageType || (MessageType = {}));
export var Location;
(function (Location) {
    Location[Location["BOTTOM"] = 0] = "BOTTOM";
    Location[Location["CENTER"] = 1] = "CENTER";
})(Location || (Location = {}));
export var TestFlag;
(function (TestFlag) {
    TestFlag[TestFlag["NON_TEST_MESSAGE"] = 0] = "NON_TEST_MESSAGE";
    TestFlag[TestFlag["TEST_MESSAGE"] = 1] = "TEST_MESSAGE";
})(TestFlag || (TestFlag = {}));
export var DismissType;
(function (DismissType) {
    DismissType[DismissType["UNKNOWN_DISMISS_TYPE"] = 0] = "UNKNOWN_DISMISS_TYPE";
    DismissType[DismissType["CLICK"] = 1] = "CLICK";
    DismissType[DismissType["CLICK_OUTSIDE"] = 2] = "CLICK_OUTSIDE";
    DismissType[DismissType["BACK_BUTTON"] = 3] = "BACK_BUTTON";
    DismissType[DismissType["AUTO"] = 4] = "AUTO";
    DismissType[DismissType["SWIPE"] = 5] = "SWIPE";
})(DismissType || (DismissType = {}));
export var Events;
(function (Events) {
    Events["ON_MESSAGE_CLICK"] = "onMessageClick";
    Events["ON_MESSAGE_DISPLAY"] = "onMessageDisplay";
    Events["ON_MESSAGE_DISMISS"] = "onMessageDismiss";
    Events["ON_MESSAGE_ERROR"] = "onMessageError";
})(Events || (Events = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FnYy1hcHBtZXNzYWdpbmcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTtBQUNGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyw4QkFBb0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVakMsbUNBQWlCOzs7O0lBR2xELCtDQUFxQixhQUFDLE9BQWdCO0lBS3RDLDBDQUFnQixhQUFDLE9BQWdCO0lBS2pDLHlDQUFlO0lBS2YsOENBQW9CO0lBS3BCLHFDQUFXLGFBQUMsS0FBYSxFQUFFLFFBQXVHO0lBS2xJLHVDQUFhO0lBS2IsNENBQWtCLGFBQUMsUUFBa0I7SUFLckMsaUNBQU8sYUFBQyxPQUFlOzs7Ozs7SUF0Q2QsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQTFCNUI7RUEwQnFDLGlCQUFpQjtTQUF6QyxlQUFlOztJQW9EeEIsb0JBQXNCLE1BQXNCO1FBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBSUQsaUNBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQ0FBaUIsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELHFDQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO3FCQXBITDs7OztJQXVIbUMsaUNBQVU7SUFHekMsdUJBQW9CLE1BQTBCO1FBQTlDLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUVyQjtRQURHLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUM1QyxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO3dCQXJJTDtFQXVIbUMsVUFBVTs7O0lBOEJ6QyxnQkFBWSxNQUFtQjtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUM5QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFxQixHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7SUFFRCx3QkFBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQ0FBb0IsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQWtCLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBMEIsR0FBMUI7UUFDSSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOEJBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO2lCQXhNTDs7OztJQTJNaUMsK0JBQVU7SUFHdkMscUJBQW9CLE1BQXdCO1FBQTVDLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUVyQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUN0QyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO3NCQXpOTDtFQTJNaUMsVUFBVTs7O0lBK0J2QyxjQUFZLE1BQWlCO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDOUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBcUIsR0FBckI7UUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsMkJBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUNBQW9CLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFrQixHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUNBQTBCLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDeEMsQ0FBQztJQUVELG9DQUFxQixHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7SUFFRCxxQ0FBc0IsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO2VBdlNMOzs7O0lBZ1RJLGdCQUFZLE1BQW1CO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVELHdCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFvQixHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDLENBQUM7SUFFRCw2QkFBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7aUJBclVMOzs7O0lBd1VvQyxrQ0FBVTtJQUcxQyx3QkFBb0IsTUFBMkI7UUFBL0MsWUFDSSxrQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBRXJCO1FBREcsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBQy9DLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7eUJBdFZMO0VBd1VvQyxVQUFVOzs7SUFxQjFDLGlCQUFZLE1BQW9CO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztrQkF4V0w7OztBQTRhQSxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ25CLHlEQUFVLENBQUE7SUFDViw2Q0FBSSxDQUFBO0lBQ0osbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7QUFDVixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxRQUdYO0FBSEQsV0FBWSxRQUFRO0lBQ2hCLDJDQUFNLENBQUE7SUFDTiwyQ0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLFFBQVEsS0FBUixRQUFRLFFBR25CO0FBRUQsTUFBTSxDQUFOLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNoQiwrREFBZ0IsQ0FBQTtJQUNoQix1REFBWSxDQUFBO0FBQ2hCLENBQUMsRUFIVyxRQUFRLEtBQVIsUUFBUSxRQUduQjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFDbkIsNkVBQW9CLENBQUE7SUFDcEIsK0NBQUssQ0FBQTtJQUNMLCtEQUFhLENBQUE7SUFDYiwyREFBVyxDQUFBO0lBQ1gsNkNBQUksQ0FBQTtJQUNKLCtDQUFLLENBQUE7QUFDVCxDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxNQUtYO0FBTEQsV0FBWSxNQUFNO0lBQ2QsNkNBQW1DLENBQUE7SUFDbkMsaURBQXVDLENBQUE7SUFDdkMsaURBQXVDLENBQUE7SUFDdkMsNkNBQW1DLENBQUE7QUFDdkMsQ0FBQyxFQUxXLE1BQU0sS0FBTixNQUFNLFFBS2pCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5AUGx1Z2luKHtcclxuICAgIHBsdWdpbk5hbWU6ICdBR0NBcHBNZXNzYWdpbmcnLFxyXG4gICAgcGx1Z2luOiAnYXBwbWVzc2FnaW5nJyxcclxuICAgIHBsdWdpblJlZjogJ0FHQ0FwcE1lc3NhZ2luZycsXHJcbiAgICByZXBvOiAnJyxcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBR0NBcHBNZXNzYWdpbmcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBzZXRGZXRjaE1lc3NhZ2VFbmFibGUoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIHNldERpc3BsYXlFbmFibGUoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIGlzRGlzcGxheUVuYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBpc0ZldGNoTWVzc2FnZUVuYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBhZGRMaXN0ZW5lcihldmVudDogRXZlbnRzLCBjYWxsYmFjazogKGFwcE1lc3NhZ2U6IENhcmRNZXNzYWdlIHwgUGljdHVyZU1lc3NhZ2UgfCBCYW5uZXJNZXNzYWdlLCBkaXNtaXNzVHlwZT86IERpc21pc3NUeXBlKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgc2V0Rm9yY2VGZXRjaCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIHNldERpc3BsYXlMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICB0cmlnZ2VyKGV2ZW50SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuYWJzdHJhY3QgY2xhc3MgQXBwTWVzc2FnZSB7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBzdGFydFRpbWU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBlbmRUaW1lOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZnJlcXVlbmN5VHlwZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZyZXF1ZW5jeVZhbHVlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdGVzdEZsYWc6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCB0cmlnZ2VyRXZlbnRzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocGFyYW1zOiBCYXNlUHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwYXJhbXMuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHBhcmFtcy5lbmRUaW1lO1xyXG4gICAgICAgIHRoaXMuZnJlcXVlbmN5VHlwZSA9IHBhcmFtcy5mcmVxdWVuY3lUeXBlO1xyXG4gICAgICAgIHRoaXMuZnJlcXVlbmN5VmFsdWUgPSBwYXJhbXMuZnJlcXVlbmN5VmFsdWU7XHJcbiAgICAgICAgdGhpcy50ZXN0RmxhZyA9IHBhcmFtcy50ZXN0RmxhZztcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudHMgPSBwYXJhbXMudHJpZ2dlckV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IGdldE1lc3NhZ2VUeXBlKCk6IE1lc3NhZ2VUeXBlO1xyXG5cclxuICAgIGdldFN0YXJ0VGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbmRUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmVxdWVuY3lUeXBlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJlcXVlbmN5VHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmVxdWVuY3lWYWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyZXF1ZW5jeVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlc3RGbGFnKCk6IFRlc3RGbGFnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RmxhZztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmlnZ2VyRXZlbnRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyRXZlbnRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFubmVyTWVzc2FnZSBleHRlbmRzIEFwcE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYW5uZXI6IEJhbm5lcjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHBhcmFtczogQmFubmVyTWVzc2FnZVByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLmJhc2UpO1xyXG4gICAgICAgIHRoaXMuYmFubmVyID0gbmV3IEJhbm5lcihwYXJhbXMuYmFubmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYW5uZXIoKTogQmFubmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYW5uZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZVR5cGUoKTogTWVzc2FnZVR5cGUge1xyXG4gICAgICAgIHJldHVybiBNZXNzYWdlVHlwZS5CQU5ORVI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBCYW5uZXIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXRsZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpdGxlQ29sb3JPcGVubmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvZHlDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5Q29sb3JPcGVubmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFja2dyb3VuZENvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGljdHVyZVVSTDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25VUkw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IEJhbm5lclByb3BzKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHBhcmFtcy50aXRsZTtcclxuICAgICAgICB0aGlzLnRpdGxlQ29sb3IgPSBwYXJhbXMudGl0bGVDb2xvcjtcclxuICAgICAgICB0aGlzLnRpdGxlQ29sb3JPcGVubmVzcyA9IHBhcmFtcy50aXRsZUNvbG9yT3Blbm5lc3M7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gcGFyYW1zLmJvZHk7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29sb3IgPSBwYXJhbXMuYm9keUNvbG9yO1xyXG4gICAgICAgIHRoaXMuYm9keUNvbG9yT3Blbm5lc3MgPSBwYXJhbXMuYm9keUNvbG9yT3Blbm5lc3M7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yT3Blbm5lc3MgPSBwYXJhbXMuYmFja2dyb3VuZENvbG9yT3Blbm5lc3M7XHJcbiAgICAgICAgdGhpcy5waWN0dXJlVVJMID0gcGFyYW1zLnBpY3R1cmVVUkw7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25VUkwgPSBwYXJhbXMuYWN0aW9uVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGVDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGVDb2xvck9wZW5uZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVDb2xvck9wZW5uZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvZHkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvZHlDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2R5Q29sb3JPcGVubmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlDb2xvck9wZW5uZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYWNrZ3JvdW5kQ29sb3JPcGVubmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck9wZW5uZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpY3R1cmVVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWN0dXJlVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGlvblVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvblVSTDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRNZXNzYWdlIGV4dGVuZHMgQXBwTWVzc2FnZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhcmQ6IENhcmQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihwYXJhbXM6IENhcmRNZXNzYWdlUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMuYmFzZSk7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQocGFyYW1zLmNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcmQoKTogQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXNzYWdlVHlwZSgpOiBNZXNzYWdlVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIE1lc3NhZ2VUeXBlLkNBUkQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENhcmQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXRsZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXRsZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpdGxlQ29sb3JPcGVubmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvZHlDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5Q29sb3JPcGVubmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFja2dyb3VuZENvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9ydHJhaXRQaWN0dXJlVVJMOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhbmRzY2FwZVBpY3R1cmVVUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWFqb3JCdXR0b246IEJ1dHRvbjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWlub3JCdXR0b246IEJ1dHRvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IENhcmRQcm9wcykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBwYXJhbXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy50aXRsZUNvbG9yID0gcGFyYW1zLnRpdGxlQ29sb3I7XHJcbiAgICAgICAgdGhpcy50aXRsZUNvbG9yT3Blbm5lc3MgPSBwYXJhbXMudGl0bGVDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHBhcmFtcy5ib2R5O1xyXG4gICAgICAgIHRoaXMuYm9keUNvbG9yID0gcGFyYW1zLmJvZHlDb2xvcjtcclxuICAgICAgICB0aGlzLmJvZHlDb2xvck9wZW5uZXNzID0gcGFyYW1zLmJvZHlDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvck9wZW5uZXNzID0gcGFyYW1zLmJhY2tncm91bmRDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMucG9ydHJhaXRQaWN0dXJlVVJMID0gcGFyYW1zLnBvcnRyYWl0UGljdHVyZVVSTDtcclxuICAgICAgICB0aGlzLmxhbmRzY2FwZVBpY3R1cmVVUkwgPSBwYXJhbXMubGFuZHNjYXBlUGljdHVyZVVSTDtcclxuICAgICAgICB0aGlzLm1ham9yQnV0dG9uID0gbmV3IEJ1dHRvbihwYXJhbXMubWFqb3JCdXR0b24pO1xyXG4gICAgICAgIHRoaXMubWlub3JCdXR0b24gPSBuZXcgQnV0dG9uKHBhcmFtcy5taW5vckJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZUNvbG9yT3Blbm5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZUNvbG9yT3Blbm5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9keSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9keUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keUNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvZHlDb2xvck9wZW5uZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keUNvbG9yT3Blbm5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFja2dyb3VuZENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhY2tncm91bmRDb2xvck9wZW5uZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yT3Blbm5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9ydHJhaXRQaWN0dXJlVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9ydHJhaXRQaWN0dXJlVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhbmRzY2FwZVBpY3R1cmVVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5kc2NhcGVQaWN0dXJlVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1ham9yQnV0dG9uKCk6IEJ1dHRvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFqb3JCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWlub3JCdXR0b24oKTogQnV0dG9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW5vckJ1dHRvbjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQnV0dG9uIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0Q29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dENvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVVJMOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBCdXR0b25Qcm9wcykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy50ZXh0O1xyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gcGFyYW1zLnRleHRDb2xvcjtcclxuICAgICAgICB0aGlzLnRleHRDb2xvck9wZW5uZXNzID0gcGFyYW1zLnRleHRDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVVJMID0gcGFyYW1zLmFjdGlvblVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXh0Q29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dENvbG9yT3Blbm5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0Q29sb3JPcGVubmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25VcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25VUkw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWN0dXJlTWVzc2FnZSBleHRlbmRzIEFwcE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwaWN0dXJlOiBQaWN0dXJlO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocGFyYW1zOiBQaWN0dXJlTWVzc2FnZVByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLmJhc2UpO1xyXG4gICAgICAgIHRoaXMucGljdHVyZSA9IG5ldyBQaWN0dXJlKHBhcmFtcy5waWN0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWN0dXJlKCk6IFBpY3R1cmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY3R1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZVR5cGUoKTogTWVzc2FnZVR5cGUge1xyXG4gICAgICAgIHJldHVybiBNZXNzYWdlVHlwZS5QSUNUVVJFO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQaWN0dXJlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGljdHVyZVVSTDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25VUkw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IFBpY3R1cmVQcm9wcykge1xyXG4gICAgICAgIHRoaXMucGljdHVyZVVSTCA9IHBhcmFtcy5waWN0dXJlVVJMO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVVJMID0gcGFyYW1zLmFjdGlvblVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWN0dXJlVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGljdHVyZVVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25VcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25VUkw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVByb3BlcnRpZXMge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIHN0YXJ0VGltZTogbnVtYmVyLFxyXG4gICAgZW5kVGltZTogbnVtYmVyLFxyXG4gICAgZnJlcXVlbmN5VHlwZTogbnVtYmVyLFxyXG4gICAgZnJlcXVlbmN5VmFsdWU6IG51bWJlcixcclxuICAgIHRlc3RGbGFnOiBudW1iZXIsXHJcbiAgICB0cmlnZ2VyRXZlbnRzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcmRNZXNzYWdlUHJvcHMge1xyXG4gICAgYmFzZTogQmFzZVByb3BlcnRpZXMsXHJcbiAgICBjYXJkOiBDYXJkUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkUHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHRpdGxlQ29sb3I6IHN0cmluZyxcclxuICAgIHRpdGxlQ29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgYm9keTogc3RyaW5nLFxyXG4gICAgYm9keUNvbG9yOiBzdHJpbmcsXHJcbiAgICBib2R5Q29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgcG9ydHJhaXRQaWN0dXJlVVJMOiBzdHJpbmcsXHJcbiAgICBsYW5kc2NhcGVQaWN0dXJlVVJMOiBzdHJpbmcsXHJcbiAgICBtYWpvckJ1dHRvbjogQnV0dG9uUHJvcHMsXHJcbiAgICBtaW5vckJ1dHRvbjogQnV0dG9uUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICB0ZXh0Q29sb3I6IHN0cmluZyxcclxuICAgIHRleHRDb2xvck9wZW5uZXNzOiBudW1iZXIsXHJcbiAgICBhY3Rpb25VUkw6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhbm5lck1lc3NhZ2VQcm9wcyB7XHJcbiAgICBiYXNlOiBCYXNlUHJvcGVydGllcyxcclxuICAgIGJhbm5lcjogQmFubmVyUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJQcm9wcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgdGl0bGVDb2xvcjogc3RyaW5nLFxyXG4gICAgdGl0bGVDb2xvck9wZW5uZXNzOiBudW1iZXIsXHJcbiAgICBib2R5OiBzdHJpbmcsXHJcbiAgICBib2R5Q29sb3I6IHN0cmluZyxcclxuICAgIGJvZHlDb2xvck9wZW5uZXNzOiBudW1iZXIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcclxuICAgIGJhY2tncm91bmRDb2xvck9wZW5uZXNzOiBudW1iZXIsXHJcbiAgICBwaWN0dXJlVVJMOiBzdHJpbmcsXHJcbiAgICBhY3Rpb25VUkw6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBpY3R1cmVNZXNzYWdlUHJvcHMge1xyXG4gICAgYmFzZTogQmFzZVByb3BlcnRpZXMsXHJcbiAgICBwaWN0dXJlOiBQaWN0dXJlUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQaWN0dXJlUHJvcHMge1xyXG4gICAgcGljdHVyZVVSTDogc3RyaW5nLFxyXG4gICAgYWN0aW9uVVJMOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xyXG4gICAgVU5fU1VQUE9SVCxcclxuICAgIENBUkQsXHJcbiAgICBQSUNUVVJFLFxyXG4gICAgQkFOTkVSXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExvY2F0aW9uIHtcclxuICAgIEJPVFRPTSxcclxuICAgIENFTlRFUlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUZXN0RmxhZyB7XHJcbiAgICBOT05fVEVTVF9NRVNTQUdFLFxyXG4gICAgVEVTVF9NRVNTQUdFXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpc21pc3NUeXBlIHtcclxuICAgIFVOS05PV05fRElTTUlTU19UWVBFLFxyXG4gICAgQ0xJQ0ssXHJcbiAgICBDTElDS19PVVRTSURFLFxyXG4gICAgQkFDS19CVVRUT04sXHJcbiAgICBBVVRPLFxyXG4gICAgU1dJUEVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXZlbnRzIHtcclxuICAgIE9OX01FU1NBR0VfQ0xJQ0sgPSAnb25NZXNzYWdlQ2xpY2snLFxyXG4gICAgT05fTUVTU0FHRV9ESVNQTEFZID0gJ29uTWVzc2FnZURpc3BsYXknLFxyXG4gICAgT05fTUVTU0FHRV9ESVNNSVNTID0gJ29uTWVzc2FnZURpc21pc3MnLFxyXG4gICAgT05fTUVTU0FHRV9FUlJPUiA9ICdvbk1lc3NhZ2VFcnJvcidcclxufVxyXG4iXX0=
