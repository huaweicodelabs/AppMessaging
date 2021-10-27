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
import {asyncExec} from "./utils";
import {DismissType, Events, Location} from "./enums";
import {CardMessage} from "./cardMessage";
import {PictureMessage} from "./pictureMessage";
import {BannerMessage} from "./bannerMessage";

export {Events, MessageType, Location, TestFlag, DismissType} from "./enums";
export {CardMessage} from './cardMessage'
export {BannerMessage} from './bannerMessage'
export {PictureMessage} from './pictureMessage'

export async function setFetchMessageEnable(enabled: boolean): Promise<void> {
    return asyncExec("AGCAppMessaging", "setFetchMessageEnable", [enabled]);
}

export async function setDisplayEnable(enabled: boolean): Promise<void> {
    return asyncExec("AGCAppMessaging", "setDisplayEnable", [enabled]);
}

export async function isDisplayEnable(): Promise<boolean> {
    const result = await asyncExec("AGCAppMessaging", "isDisplayEnable", []);
    return result.value;
}

export async function isFetchMessageEnable(): Promise<boolean> {
    const result = await asyncExec("AGCAppMessaging", "isFetchMessageEnable", []);
    return result.value;
}

export function addListener(event: Events, callback: (appMessage: CardMessage | PictureMessage | BannerMessage, dismissType?: DismissType) => void): Promise<void> {
    window.subscribeAGCEvent(event, callback);
    return asyncExec("AGCAppMessaging", "addListener", [event]);
}

export function setForceFetch(): Promise<string> {
    return asyncExec("AGCAppMessaging", "setForceFetch", []);
}

export function setDisplayLocation(location: Location): Promise<void> {
    return asyncExec("AGCAppMessaging", "setDisplayLocation", [location]);
}

export function trigger(eventId: string): Promise<void> {
    return asyncExec("AGCAppMessaging", "trigger", [eventId]);
}
