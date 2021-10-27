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
import {PictureMessageProps, PictureProps} from "./interfaces";

export class PictureMessage extends AppMessage {
    private readonly picture: Picture;

    constructor(params: PictureMessageProps) {
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
