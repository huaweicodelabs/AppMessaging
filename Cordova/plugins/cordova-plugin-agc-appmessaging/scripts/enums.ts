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
    SWIPE,
}

export enum Events {
    ON_MESSAGE_CLICK = "onMessageClick",
    ON_MESSAGE_DISPLAY = "onMessageDisplay",
    ON_MESSAGE_DISMISS = "onMessageDismiss",
    ON_MESSAGE_ERROR = "onMessageError"
}
