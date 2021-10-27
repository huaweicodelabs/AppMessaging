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
