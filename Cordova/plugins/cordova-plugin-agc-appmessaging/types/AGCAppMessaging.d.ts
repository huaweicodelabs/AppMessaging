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
import { DismissType, Events, Location } from "./enums";
import { CardMessage } from "./cardMessage";
import { PictureMessage } from "./pictureMessage";
import { BannerMessage } from "./bannerMessage";
export { Events, MessageType, Location, TestFlag, DismissType } from "./enums";
export { CardMessage } from './cardMessage';
export { BannerMessage } from './bannerMessage';
export { PictureMessage } from './pictureMessage';
export declare function setFetchMessageEnable(enabled: boolean): Promise<void>;
export declare function setDisplayEnable(enabled: boolean): Promise<void>;
export declare function isDisplayEnable(): Promise<boolean>;
export declare function isFetchMessageEnable(): Promise<boolean>;
export declare function addListener(event: Events, callback: (appMessage: CardMessage | PictureMessage | BannerMessage, dismissType?: DismissType) => void): Promise<void>;
export declare function setForceFetch(): Promise<string>;
export declare function setDisplayLocation(location: Location): Promise<void>;
export declare function trigger(eventId: string): Promise<void>;
