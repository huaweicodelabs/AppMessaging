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
import { AppMessage } from "./appMessage";
import { MessageType } from "./enums";
import { BannerMessageProps, BannerProps } from "./interfaces";
export declare class BannerMessage extends AppMessage {
    private readonly banner;
    constructor(params: BannerMessageProps);
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
export {};
