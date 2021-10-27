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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AGCAppMessagingOriginal = /** @class */ (function (_super) {
    __extends(AGCAppMessagingOriginal, _super);
    function AGCAppMessagingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AGCAppMessagingOriginal.prototype.setFetchMessageEnable = function (enabled) { return cordova(this, "setFetchMessageEnable", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.setDisplayEnable = function (enabled) { return cordova(this, "setDisplayEnable", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.isDisplayEnable = function () { return cordova(this, "isDisplayEnable", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.isFetchMessageEnable = function () { return cordova(this, "isFetchMessageEnable", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.addListener = function (event, callback) { return cordova(this, "addListener", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.setForceFetch = function () { return cordova(this, "setForceFetch", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.setDisplayLocation = function (location) { return cordova(this, "setDisplayLocation", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.prototype.trigger = function (eventId) { return cordova(this, "trigger", { "otherPromise": true }, arguments); };
    AGCAppMessagingOriginal.pluginName = "AGCAppMessaging";
    AGCAppMessagingOriginal.plugin = "appmessaging";
    AGCAppMessagingOriginal.pluginRef = "AGCAppMessaging";
    AGCAppMessagingOriginal.repo = "";
    AGCAppMessagingOriginal.platforms = ["Android", "iOS"];
    return AGCAppMessagingOriginal;
}(IonicNativePlugin));
var AGCAppMessaging = new AGCAppMessagingOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FnYy1hcHBtZXNzYWdpbmcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLDhCQUFvQyxNQUFNLG9CQUFvQixDQUFDOztJQVVqQyxtQ0FBaUI7Ozs7SUFHbEQsK0NBQXFCLGFBQUMsT0FBZ0I7SUFLdEMsMENBQWdCLGFBQUMsT0FBZ0I7SUFLakMseUNBQWU7SUFLZiw4Q0FBb0I7SUFLcEIscUNBQVcsYUFBQyxLQUFhLEVBQUUsUUFBdUc7SUFLbEksdUNBQWE7SUFLYiw0Q0FBa0IsYUFBQyxRQUFrQjtJQUtyQyxpQ0FBTyxhQUFDLE9BQWU7Ozs7OzswQkFoRTNCO0VBMEJxQyxpQkFBaUI7U0FBekMsZUFBZTs7SUFvRHhCLG9CQUFzQixNQUFzQjtRQUN4QyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDOUMsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUlELGlDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFD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Q04sMkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxRQUFRLEtBQVIsUUFBUSxRQUduQjtBQUVELE1BQU0sQ0FBTixJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDaEIsK0RBQWdCLENBQUE7SUFDaEIsdURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSFcsUUFBUSxLQUFSLFFBQVEsUUFHbkI7QUFFRCxNQUFNLENBQU4sSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ25CLDZFQUFvQixDQUFBO0lBQ3BCLCtDQUFLLENBQUE7SUFDTCwrREFBYSxDQUFBO0lBQ2IsMkRBQVcsQ0FBQTtJQUNYLDZDQUFJLENBQUE7SUFDSiwrQ0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQVBXLFdBQVcsS0FBWCxXQUFXLFFBT3RCO0FBRUQsTUFBTSxDQUFOLElBQVksTUFLWDtBQUxELFdBQVksTUFBTTtJQUNkLDZDQUFtQyxDQUFBO0lBQ25DLGlEQUF1QyxDQUFBO0lBQ3ZDLGlEQUF1QyxDQUFBO0lBQ3ZDLDZDQUFtQyxDQUFBO0FBQ3ZDLENBQUMsRUFMVyxNQUFNLEtBQU4sTUFBTSxRQUtqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2lufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnQUdDQXBwTWVzc2FnaW5nJyxcclxuICAgIHBsdWdpbjogJ2FwcG1lc3NhZ2luZycsXHJcbiAgICBwbHVnaW5SZWY6ICdBR0NBcHBNZXNzYWdpbmcnLFxyXG4gICAgcmVwbzogJycsXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQUdDQXBwTWVzc2FnaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgc2V0RmV0Y2hNZXNzYWdlRW5hYmxlKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBzZXREaXNwbGF5RW5hYmxlKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBpc0Rpc3BsYXlFbmFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgaXNGZXRjaE1lc3NhZ2VFbmFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgYWRkTGlzdGVuZXIoZXZlbnQ6IEV2ZW50cywgY2FsbGJhY2s6IChhcHBNZXNzYWdlOiBDYXJkTWVzc2FnZSB8IFBpY3R1cmVNZXNzYWdlIHwgQmFubmVyTWVzc2FnZSwgZGlzbWlzc1R5cGU/OiBEaXNtaXNzVHlwZSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcclxuICAgIHNldEZvcmNlRmV0Y2goKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXHJcbiAgICBzZXREaXNwbGF5TG9jYXRpb24obG9jYXRpb246IExvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxyXG4gICAgdHJpZ2dlcihldmVudElkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbmFic3RyYWN0IGNsYXNzIEFwcE1lc3NhZ2Uge1xyXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgZW5kVGltZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGZyZXF1ZW5jeVR5cGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBmcmVxdWVuY3lWYWx1ZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHRlc3RGbGFnOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlckV2ZW50czogc3RyaW5nW107XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHBhcmFtczogQmFzZVByb3BlcnRpZXMpIHtcclxuICAgICAgICB0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGFyYW1zLnN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSBwYXJhbXMuZW5kVGltZTtcclxuICAgICAgICB0aGlzLmZyZXF1ZW5jeVR5cGUgPSBwYXJhbXMuZnJlcXVlbmN5VHlwZTtcclxuICAgICAgICB0aGlzLmZyZXF1ZW5jeVZhbHVlID0gcGFyYW1zLmZyZXF1ZW5jeVZhbHVlO1xyXG4gICAgICAgIHRoaXMudGVzdEZsYWcgPSBwYXJhbXMudGVzdEZsYWc7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnRzID0gcGFyYW1zLnRyaWdnZXJFdmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBnZXRNZXNzYWdlVHlwZSgpOiBNZXNzYWdlVHlwZTtcclxuXHJcbiAgICBnZXRTdGFydFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5kVGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJlcXVlbmN5VHlwZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZyZXF1ZW5jeVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJlcXVlbmN5VmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mcmVxdWVuY3lWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUZXN0RmxhZygpOiBUZXN0RmxhZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdEZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJpZ2dlckV2ZW50cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlckV2ZW50cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbm5lck1lc3NhZ2UgZXh0ZW5kcyBBcHBNZXNzYWdlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFubmVyOiBCYW5uZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihwYXJhbXM6IEJhbm5lck1lc3NhZ2VQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5iYXNlKTtcclxuICAgICAgICB0aGlzLmJhbm5lciA9IG5ldyBCYW5uZXIocGFyYW1zLmJhbm5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFubmVyKCk6IEJhbm5lciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFubmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VUeXBlKCk6IE1lc3NhZ2VUeXBlIHtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZVR5cGUuQkFOTkVSO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQmFubmVyIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGl0bGVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXRsZUNvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9keTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5Q29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9keUNvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhY2tncm91bmRDb2xvck9wZW5uZXNzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBpY3R1cmVVUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVVJMOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBCYW5uZXJQcm9wcykge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBwYXJhbXMudGl0bGU7XHJcbiAgICAgICAgdGhpcy50aXRsZUNvbG9yID0gcGFyYW1zLnRpdGxlQ29sb3I7XHJcbiAgICAgICAgdGhpcy50aXRsZUNvbG9yT3Blbm5lc3MgPSBwYXJhbXMudGl0bGVDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHBhcmFtcy5ib2R5O1xyXG4gICAgICAgIHRoaXMuYm9keUNvbG9yID0gcGFyYW1zLmJvZHlDb2xvcjtcclxuICAgICAgICB0aGlzLmJvZHlDb2xvck9wZW5uZXNzID0gcGFyYW1zLmJvZHlDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvck9wZW5uZXNzID0gcGFyYW1zLmJhY2tncm91bmRDb2xvck9wZW5uZXNzO1xyXG4gICAgICAgIHRoaXMucGljdHVyZVVSTCA9IHBhcmFtcy5waWN0dXJlVVJMO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVVJMID0gcGFyYW1zLmFjdGlvblVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZUNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlQ29sb3JPcGVubmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlQ29sb3JPcGVubmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2R5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2R5Q29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9keUNvbG9yT3Blbm5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5Q29sb3JPcGVubmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmFja2dyb3VuZENvbG9yT3Blbm5lc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3JPcGVubmVzcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQaWN0dXJlVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGljdHVyZVVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpb25VcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25VUkw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkTWVzc2FnZSBleHRlbmRzIEFwcE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYXJkOiBDYXJkO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocGFyYW1zOiBDYXJkTWVzc2FnZVByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLmJhc2UpO1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBDYXJkKHBhcmFtcy5jYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkKCk6IENhcmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZVR5cGUoKTogTWVzc2FnZVR5cGUge1xyXG4gICAgICAgIHJldHVybiBNZXNzYWdlVHlwZS5DQVJEO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDYXJkIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGl0bGVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXRsZUNvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9keTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5Q29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9keUNvbG9yT3Blbm5lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJhY2tncm91bmRDb2xvck9wZW5uZXNzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvcnRyYWl0UGljdHVyZVVSTDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYW5kc2NhcGVQaWN0dXJlVVJMOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1ham9yQnV0dG9uOiBCdXR0b247XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1pbm9yQnV0dG9uOiBCdXR0b247XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBDYXJkUHJvcHMpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gcGFyYW1zLnRpdGxlO1xyXG4gICAgICAgIHRoaXMudGl0bGVDb2xvciA9IHBhcmFtcy50aXRsZUNvbG9yO1xyXG4gICAgICAgIHRoaXMudGl0bGVDb2xvck9wZW5uZXNzID0gcGFyYW1zLnRpdGxlQ29sb3JPcGVubmVzcztcclxuICAgICAgICB0aGlzLmJvZHkgPSBwYXJhbXMuYm9keTtcclxuICAgICAgICB0aGlzLmJvZHlDb2xvciA9IHBhcmFtcy5ib2R5Q29sb3I7XHJcbiAgICAgICAgdGhpcy5ib2R5Q29sb3JPcGVubmVzcyA9IHBhcmFtcy5ib2R5Q29sb3JPcGVubmVzcztcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JPcGVubmVzcyA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3JPcGVubmVzcztcclxuICAgICAgICB0aGlzLnBvcnRyYWl0UGljdHVyZVVSTCA9IHBhcmFtcy5wb3J0cmFpdFBpY3R1cmVVUkw7XHJcbiAgICAgICAgdGhpcy5sYW5kc2NhcGVQaWN0dXJlVVJMID0gcGFyYW1zLmxhbmRzY2FwZVBpY3R1cmVVUkw7XHJcbiAgICAgICAgdGhpcy5tYWpvckJ1dHRvbiA9IG5ldyBCdXR0b24ocGFyYW1zLm1ham9yQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1pbm9yQnV0dG9uID0gbmV3IEJ1dHRvbihwYXJhbXMubWlub3JCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGVDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGVDb2xvck9wZW5uZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVDb2xvck9wZW5uZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvZHkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvZHlDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2R5Q29sb3JPcGVubmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlDb2xvck9wZW5uZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCYWNrZ3JvdW5kQ29sb3JPcGVubmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRDb2xvck9wZW5uZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcnRyYWl0UGljdHVyZVVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcnRyYWl0UGljdHVyZVVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYW5kc2NhcGVQaWN0dXJlVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZHNjYXBlUGljdHVyZVVSTDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYWpvckJ1dHRvbigpOiBCdXR0b24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1ham9yQnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1pbm9yQnV0dG9uKCk6IEJ1dHRvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWlub3JCdXR0b247XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJ1dHRvbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHRDb2xvck9wZW5uZXNzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvblVSTDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogQnV0dG9uUHJvcHMpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSBwYXJhbXMudGV4dDtcclxuICAgICAgICB0aGlzLnRleHRDb2xvciA9IHBhcmFtcy50ZXh0Q29sb3I7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3JPcGVubmVzcyA9IHBhcmFtcy50ZXh0Q29sb3JPcGVubmVzcztcclxuICAgICAgICB0aGlzLmFjdGlvblVSTCA9IHBhcmFtcy5hY3Rpb25VUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGV4dENvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRleHRDb2xvck9wZW5uZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dENvbG9yT3Blbm5lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aW9uVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uVVJMO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGljdHVyZU1lc3NhZ2UgZXh0ZW5kcyBBcHBNZXNzYWdlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGljdHVyZTogUGljdHVyZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHBhcmFtczogUGljdHVyZU1lc3NhZ2VQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5iYXNlKTtcclxuICAgICAgICB0aGlzLnBpY3R1cmUgPSBuZXcgUGljdHVyZShwYXJhbXMucGljdHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGljdHVyZSgpOiBQaWN0dXJlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWN0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VUeXBlKCk6IE1lc3NhZ2VUeXBlIHtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZVR5cGUuUElDVFVSRTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGljdHVyZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBpY3R1cmVVUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVVJMOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBQaWN0dXJlUHJvcHMpIHtcclxuICAgICAgICB0aGlzLnBpY3R1cmVVUkwgPSBwYXJhbXMucGljdHVyZVVSTDtcclxuICAgICAgICB0aGlzLmFjdGlvblVSTCA9IHBhcmFtcy5hY3Rpb25VUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGljdHVyZVVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY3R1cmVVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aW9uVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uVVJMO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VQcm9wZXJ0aWVzIHtcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBzdGFydFRpbWU6IG51bWJlcixcclxuICAgIGVuZFRpbWU6IG51bWJlcixcclxuICAgIGZyZXF1ZW5jeVR5cGU6IG51bWJlcixcclxuICAgIGZyZXF1ZW5jeVZhbHVlOiBudW1iZXIsXHJcbiAgICB0ZXN0RmxhZzogbnVtYmVyLFxyXG4gICAgdHJpZ2dlckV2ZW50czogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkTWVzc2FnZVByb3BzIHtcclxuICAgIGJhc2U6IEJhc2VQcm9wZXJ0aWVzLFxyXG4gICAgY2FyZDogQ2FyZFByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICB0aXRsZUNvbG9yOiBzdHJpbmcsXHJcbiAgICB0aXRsZUNvbG9yT3Blbm5lc3M6IG51bWJlcixcclxuICAgIGJvZHk6IHN0cmluZyxcclxuICAgIGJvZHlDb2xvcjogc3RyaW5nLFxyXG4gICAgYm9keUNvbG9yT3Blbm5lc3M6IG51bWJlcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yT3Blbm5lc3M6IG51bWJlcixcclxuICAgIHBvcnRyYWl0UGljdHVyZVVSTDogc3RyaW5nLFxyXG4gICAgbGFuZHNjYXBlUGljdHVyZVVSTDogc3RyaW5nLFxyXG4gICAgbWFqb3JCdXR0b246IEJ1dHRvblByb3BzLFxyXG4gICAgbWlub3JCdXR0b246IEJ1dHRvblByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgdGV4dENvbG9yOiBzdHJpbmcsXHJcbiAgICB0ZXh0Q29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgYWN0aW9uVVJMOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJNZXNzYWdlUHJvcHMge1xyXG4gICAgYmFzZTogQmFzZVByb3BlcnRpZXMsXHJcbiAgICBiYW5uZXI6IEJhbm5lclByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFubmVyUHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHRpdGxlQ29sb3I6IHN0cmluZyxcclxuICAgIHRpdGxlQ29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgYm9keTogc3RyaW5nLFxyXG4gICAgYm9keUNvbG9yOiBzdHJpbmcsXHJcbiAgICBib2R5Q29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JPcGVubmVzczogbnVtYmVyLFxyXG4gICAgcGljdHVyZVVSTDogc3RyaW5nLFxyXG4gICAgYWN0aW9uVVJMOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQaWN0dXJlTWVzc2FnZVByb3BzIHtcclxuICAgIGJhc2U6IEJhc2VQcm9wZXJ0aWVzLFxyXG4gICAgcGljdHVyZTogUGljdHVyZVByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGljdHVyZVByb3BzIHtcclxuICAgIHBpY3R1cmVVUkw6IHN0cmluZyxcclxuICAgIGFjdGlvblVSTDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcclxuICAgIFVOX1NVUFBPUlQsXHJcbiAgICBDQVJELFxyXG4gICAgUElDVFVSRSxcclxuICAgIEJBTk5FUlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb2NhdGlvbiB7XHJcbiAgICBCT1RUT00sXHJcbiAgICBDRU5URVJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVGVzdEZsYWcge1xyXG4gICAgTk9OX1RFU1RfTUVTU0FHRSxcclxuICAgIFRFU1RfTUVTU0FHRVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXNtaXNzVHlwZSB7XHJcbiAgICBVTktOT1dOX0RJU01JU1NfVFlQRSxcclxuICAgIENMSUNLLFxyXG4gICAgQ0xJQ0tfT1VUU0lERSxcclxuICAgIEJBQ0tfQlVUVE9OLFxyXG4gICAgQVVUTyxcclxuICAgIFNXSVBFXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV2ZW50cyB7XHJcbiAgICBPTl9NRVNTQUdFX0NMSUNLID0gJ29uTWVzc2FnZUNsaWNrJyxcclxuICAgIE9OX01FU1NBR0VfRElTUExBWSA9ICdvbk1lc3NhZ2VEaXNwbGF5JyxcclxuICAgIE9OX01FU1NBR0VfRElTTUlTUyA9ICdvbk1lc3NhZ2VEaXNtaXNzJyxcclxuICAgIE9OX01FU1NBR0VfRVJST1IgPSAnb25NZXNzYWdlRXJyb3InXHJcbn1cclxuIl19
