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
import {MessageType, TestFlag} from "./enums";
import {BaseProperties} from "./interfaces";

export abstract class AppMessage {
    protected id: string;
    protected startTime: number;
    protected endTime: number;
    protected frequencyType: number;
    protected frequencyValue: number;
    protected testFlag: number;
    protected triggerEvents: string[];

    protected constructor(params: BaseProperties) {
        this.id = params.id;
        this.startTime = params.startTime;
        this.endTime = params.endTime;
        this.frequencyType = params.frequencyType;
        this.frequencyValue = params.frequencyValue;
        this.testFlag = params.testFlag;
        this.triggerEvents = params.triggerEvents;
    }

    getId(): string {
        return this.id;
    }

    abstract getMessageType(): MessageType;

    getStartTime(): number {
        return this.startTime;
    }

    getEndTime(): number {
        return this.endTime;
    }

    getFrequencyType(): number {
        return this.frequencyType;
    }

    getFrequencyValue(): number {
        return this.frequencyValue;
    }

    getTestFlag(): TestFlag {
        return this.testFlag;
    }

    getTriggerEvents(): string[] {
        return this.triggerEvents;
    }
}
