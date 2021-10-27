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
import {BannerMessageProps, BannerProps} from "./interfaces";

export class BannerMessage extends AppMessage {
    private readonly banner: Banner;

    constructor(params: BannerMessageProps) {
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


