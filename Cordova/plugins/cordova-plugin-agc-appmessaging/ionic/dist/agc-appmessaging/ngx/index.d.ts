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
import { IonicNativePlugin } from '@ionic-native/core';
export declare class AGCAppMessaging extends IonicNativePlugin {
    setFetchMessageEnable(enabled: boolean): Promise<void>;
    setDisplayEnable(enabled: boolean): Promise<void>;
    isDisplayEnable(): Promise<boolean>;
    isFetchMessageEnable(): Promise<boolean>;
    addListener(event: Events, callback: (appMessage: CardMessage | PictureMessage | BannerMessage, dismissType?: DismissType) => void): Promise<void>;
    setForceFetch(): Promise<string>;
    setDisplayLocation(location: Location): Promise<void>;
    trigger(eventId: string): Promise<void>;
}
declare abstract class AppMessage {
    protected id: string;
    protected startTime: number;
    protected endTime: number;
    protected frequencyType: number;
    protected frequencyValue: number;
    protected testFlag: number;
    protected triggerEvents: string[];
    protected constructor(params: BaseProperties);
    getId(): string;
    abstract getMessageType(): MessageType;
    getStartTime(): number;
    getEndTime(): number;
    getFrequencyType(): number;
    getFrequencyValue(): number;
    getTestFlag(): TestFlag;
    getTriggerEvents(): string[];
}
export declare class BannerMessage extends AppMessage {
    private readonly banner;
    private constructor();
    getBanner(): Banner;
    getMessageType(): MessageType;
}
declare class Banner {
    private readonly title;
    private readonly titleColor;
    private readonly titleColorOpenness;
    private readonly body;
    private readonly bodyColor;
    private readonly bodyColorOpenness;
    private readonly backgroundColor;
    private readonly backgroundColorOpenness;
    private readonly pictureURL;
    private readonly actionURL;
    constructor(params: BannerProps);
    getTitle(): string;
    getTitleColor(): string;
    getTitleColorOpenness(): number;
    getBody(): string;
    getBodyColor(): string;
    getBodyColorOpenness(): number;
    getBackgroundColor(): string;
    getBackgroundColorOpenness(): number;
    getPictureUrl(): string;
    getActionUrl(): string;
}
export declare class CardMessage extends AppMessage {
    private readonly card;
    private constructor();
    getCard(): Card;
    getMessageType(): MessageType;
}
declare class Card {
    private readonly title;
    private readonly titleColor;
    private readonly titleColorOpenness;
    private readonly body;
    private readonly bodyColor;
    private readonly bodyColorOpenness;
    private readonly backgroundColor;
    private readonly backgroundColorOpenness;
    private readonly portraitPictureURL;
    private readonly landscapePictureURL;
    private readonly majorButton;
    private readonly minorButton;
    constructor(params: CardProps);
    getTitle(): string;
    getTitleColor(): string;
    getTitleColorOpenness(): number;
    getBody(): string;
    getBodyColor(): string;
    getBodyColorOpenness(): number;
    getBackgroundColor(): string;
    getBackgroundColorOpenness(): number;
    getPortraitPictureUrl(): string;
    getLandscapePictureUrl(): string;
    getMajorButton(): Button;
    getMinorButton(): Button;
}
declare class Button {
    private readonly text;
    private readonly textColor;
    private readonly textColorOpenness;
    private readonly actionURL;
    constructor(params: ButtonProps);
    getText(): string;
    getTextColor(): string;
    getTextColorOpenness(): number;
    getActionUrl(): string;
}
export declare class PictureMessage extends AppMessage {
    private readonly picture;
    private constructor();
    getPicture(): Picture;
    getMessageType(): MessageType;
}
declare class Picture {
    private readonly pictureURL;
    private readonly actionURL;
    constructor(params: PictureProps);
    getPictureUrl(): string;
    getActionUrl(): string;
}
export interface BaseProperties {
    id: string;
    startTime: number;
    endTime: number;
    frequencyType: number;
    frequencyValue: number;
    testFlag: number;
    triggerEvents: string[];
}
export interface CardMessageProps {
    base: BaseProperties;
    card: CardProps;
}
export interface CardProps {
    title: string;
    titleColor: string;
    titleColorOpenness: number;
    body: string;
    bodyColor: string;
    bodyColorOpenness: number;
    backgroundColor: string;
    backgroundColorOpenness: number;
    portraitPictureURL: string;
    landscapePictureURL: string;
    majorButton: ButtonProps;
    minorButton: ButtonProps;
}
export interface ButtonProps {
    text: string;
    textColor: string;
    textColorOpenness: number;
    actionURL: string;
}
export interface BannerMessageProps {
    base: BaseProperties;
    banner: BannerProps;
}
export interface BannerProps {
    title: string;
    titleColor: string;
    titleColorOpenness: number;
    body: string;
    bodyColor: string;
    bodyColorOpenness: number;
    backgroundColor: string;
    backgroundColorOpenness: number;
    pictureURL: string;
    actionURL: string;
}
export interface PictureMessageProps {
    base: BaseProperties;
    picture: PictureProps;
}
export interface PictureProps {
    pictureURL: string;
    actionURL: string;
}
export declare enum MessageType {
    UN_SUPPORT = 0,
    CARD = 1,
    PICTURE = 2,
    BANNER = 3
}
export declare enum Location {
    BOTTOM = 0,
    CENTER = 1
}
export declare enum TestFlag {
    NON_TEST_MESSAGE = 0,
    TEST_MESSAGE = 1
}
export declare enum DismissType {
    UNKNOWN_DISMISS_TYPE = 0,
    CLICK = 1,
    CLICK_OUTSIDE = 2,
    BACK_BUTTON = 3,
    AUTO = 4,
    SWIPE = 5
}
export declare enum Events {
    ON_MESSAGE_CLICK = "onMessageClick",
    ON_MESSAGE_DISPLAY = "onMessageDisplay",
    ON_MESSAGE_DISMISS = "onMessageDismiss",
    ON_MESSAGE_ERROR = "onMessageError"
}
export {};
