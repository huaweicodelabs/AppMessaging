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
import {AppMessage} from "./appMessage";
import {MessageType} from "./enums";
import {ButtonProps, CardMessageProps, CardProps} from "./interfaces";

export class CardMessage extends AppMessage {
    private readonly card: Card;

    constructor(params: CardMessageProps) {
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
