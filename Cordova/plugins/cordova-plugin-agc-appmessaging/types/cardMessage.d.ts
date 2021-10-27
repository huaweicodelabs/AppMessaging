import { AppMessage } from "./appMessage";
import { MessageType } from "./enums";
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
import { ButtonProps, CardMessageProps, CardProps } from "./interfaces";
export declare class CardMessage extends AppMessage {
    private readonly card;
    constructor(params: CardMessageProps);
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
export {};
