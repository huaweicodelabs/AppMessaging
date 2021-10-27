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
import {Injectable} from '@angular/core';
import {Cordova, IonicNativePlugin, Plugin} from '@ionic-native/core';

@Plugin({
    pluginName: 'AGCAppMessaging',
    plugin: 'appmessaging',
    pluginRef: 'AGCAppMessaging',
    repo: '',
    platforms: ['Android', 'iOS'],
})
@Injectable()
export class AGCAppMessaging extends IonicNativePlugin {

    @Cordova({otherPromise: true})
    setFetchMessageEnable(enabled: boolean): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    setDisplayEnable(enabled: boolean): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    isDisplayEnable(): Promise<boolean> {
        return;
    }

    @Cordova({otherPromise: true})
    isFetchMessageEnable(): Promise<boolean> {
        return;
    }

    @Cordova({otherPromise: true})
    addListener(event: Events, callback: (appMessage: CardMessage | PictureMessage | BannerMessage, dismissType?: DismissType) => void): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    setForceFetch(): Promise<string> {
        return;
    }

    @Cordova({otherPromise: true})
    setDisplayLocation(location: Location): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    trigger(eventId: string): Promise<void> {
        return;
    }
}

abstract class AppMessage {
    protected id: string;
    protected startTime: number;
    protected endTime: number;
    protected frequencyType: number;
    protected frequencyValue: number;
    protected testFlag: number;
    protected triggerEvents: string[];

    protected constructor(params: BaseProperties) {
        this.id = params.id;
        this.startTime = params.startTime;
        this.endTime = params.endTime;
        this.frequencyType = params.frequencyType;
        this.frequencyValue = params.frequencyValue;
        this.testFlag = params.testFlag;
        this.triggerEvents = params.triggerEvents;
    }

    getId(): string {
        return this.id;
    }

    abstract getMessageType(): MessageType;

    getStartTime(): number {
        return this.startTime;
    }

    getEndTime(): number {
        return this.endTime;
    }

    getFrequencyType(): number {
        return this.frequencyType;
    }

    getFrequencyValue(): number {
        return this.frequencyValue;
    }

    getTestFlag(): TestFlag {
        return this.testFlag;
    }

    getTriggerEvents(): string[] {
        return this.triggerEvents;
    }
}

export class BannerMessage extends AppMessage {
    private readonly banner: Banner;

    private constructor(params: BannerMessageProps) {
        super(params.base);
        this.banner = new Banner(params.banner);
    }

    getBanner(): Banner {
        return this.banner;
    }

    getMessageType(): MessageType {
        return MessageType.BANNER;
    }

}

class Banner {
    private readonly title: string;
    private readonly titleColor: string;
    private readonly titleColorOpenness: number;
    private readonly body: string;
    private readonly bodyColor: string;
    private readonly bodyColorOpenness: number;
    private readonly backgroundColor: string;
    private readonly backgroundColorOpenness: number;
    private readonly pictureURL: string;
    private readonly actionURL: string;

    constructor(params: BannerProps) {
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

    getTitle(): string {
        return this.title;
    }

    getTitleColor(): string {
        return this.titleColor;
    }

    getTitleColorOpenness(): number {
        return this.titleColorOpenness;
    }

    getBody(): string {
        return this.body;
    }

    getBodyColor(): string {
        return this.bodyColor;
    }

    getBodyColorOpenness(): number {
        return this.bodyColorOpenness;
    }

    getBackgroundColor(): string {
        return this.backgroundColor;
    }

    getBackgroundColorOpenness(): number {
        return this.backgroundColorOpenness;
    }

    getPictureUrl(): string {
        return this.pictureURL;
    }

    getActionUrl(): string {
        return this.actionURL;
    }
}

export class CardMessage extends AppMessage {
    private readonly card: Card;

    private constructor(params: CardMessageProps) {
        super(params.base);
        this.card = new Card(params.card);
    }

    getCard(): Card {
        return this.card;
    }

    getMessageType(): MessageType {
        return MessageType.CARD;
    }
}

class Card {
    private readonly title: string;
    private readonly titleColor: string;
    private readonly titleColorOpenness: number;
    private readonly body: string;
    private readonly bodyColor: string;
    private readonly bodyColorOpenness: number;
    private readonly backgroundColor: string;
    private readonly backgroundColorOpenness: number;
    private readonly portraitPictureURL: string;
    private readonly landscapePictureURL: string;
    private readonly majorButton: Button;
    private readonly minorButton: Button;

    constructor(params: CardProps) {
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

    getTitle(): string {
        return this.title;
    }

    getTitleColor(): string {
        return this.titleColor;
    }

    getTitleColorOpenness(): number {
        return this.titleColorOpenness;
    }

    getBody(): string {
        return this.body;
    }

    getBodyColor(): string {
        return this.bodyColor;
    }

    getBodyColorOpenness(): number {
        return this.bodyColorOpenness;
    }

    getBackgroundColor(): string {
        return this.backgroundColor;
    }

    getBackgroundColorOpenness(): number {
        return this.backgroundColorOpenness;
    }

    getPortraitPictureUrl(): string {
        return this.portraitPictureURL;
    }

    getLandscapePictureUrl(): string {
        return this.landscapePictureURL;
    }

    getMajorButton(): Button {
        return this.majorButton;
    }

    getMinorButton(): Button {
        return this.minorButton;
    }
}

class Button {
    private readonly text: string;
    private readonly textColor: string;
    private readonly textColorOpenness: number;
    private readonly actionURL: string;

    constructor(params: ButtonProps) {
        this.text = params.text;
        this.textColor = params.textColor;
        this.textColorOpenness = params.textColorOpenness;
        this.actionURL = params.actionURL;
    }

    getText(): string {
        return this.text;
    }

    getTextColor(): string {
        return this.textColor;
    }

    getTextColorOpenness(): number {
        return this.textColorOpenness;
    }

    getActionUrl(): string {
        return this.actionURL;
    }
}

export class PictureMessage extends AppMessage {
    private readonly picture: Picture;

    private constructor(params: PictureMessageProps) {
        super(params.base);
        this.picture = new Picture(params.picture);
    }

    getPicture(): Picture {
        return this.picture;
    }

    getMessageType(): MessageType {
        return MessageType.PICTURE;
    }
}

class Picture {
    private readonly pictureURL: string;
    private readonly actionURL: string;

    constructor(params: PictureProps) {
        this.pictureURL = params.pictureURL;
        this.actionURL = params.actionURL;
    }

    getPictureUrl(): string {
        return this.pictureURL;
    }

    getActionUrl(): string {
        return this.actionURL;
    }
}

export interface BaseProperties {
    id: string,
    startTime: number,
    endTime: number,
    frequencyType: number,
    frequencyValue: number,
    testFlag: number,
    triggerEvents: string[]
}

export interface CardMessageProps {
    base: BaseProperties,
    card: CardProps
}

export interface CardProps {
    title: string,
    titleColor: string,
    titleColorOpenness: number,
    body: string,
    bodyColor: string,
    bodyColorOpenness: number,
    backgroundColor: string,
    backgroundColorOpenness: number,
    portraitPictureURL: string,
    landscapePictureURL: string,
    majorButton: ButtonProps,
    minorButton: ButtonProps
}

export interface ButtonProps {
    text: string,
    textColor: string,
    textColorOpenness: number,
    actionURL: string
}

export interface BannerMessageProps {
    base: BaseProperties,
    banner: BannerProps
}

export interface BannerProps {
    title: string,
    titleColor: string,
    titleColorOpenness: number,
    body: string,
    bodyColor: string,
    bodyColorOpenness: number,
    backgroundColor: string,
    backgroundColorOpenness: number,
    pictureURL: string,
    actionURL: string
}

export interface PictureMessageProps {
    base: BaseProperties,
    picture: PictureProps
}

export interface PictureProps {
    pictureURL: string,
    actionURL: string
}

export enum MessageType {
    UN_SUPPORT,
    CARD,
    PICTURE,
    BANNER
}

export enum Location {
    BOTTOM,
    CENTER
}

export enum TestFlag {
    NON_TEST_MESSAGE,
    TEST_MESSAGE
}

export enum DismissType {
    UNKNOWN_DISMISS_TYPE,
    CLICK,
    CLICK_OUTSIDE,
    BACK_BUTTON,
    AUTO,
    SWIPE
}

export enum Events {
    CUSTOM_VIEW = "customView",
    ON_MESSAGE_CLICK = 'onMessageClick',
    ON_MESSAGE_DISPLAY = 'onMessageDisplay',
    ON_MESSAGE_DISMISS = 'onMessageDismiss',
    ON_MESSAGE_ERROR = 'onMessageError'
}
