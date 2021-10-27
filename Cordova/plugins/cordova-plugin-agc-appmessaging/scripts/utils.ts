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
import {exec} from 'cordova';

export function asyncExec(clazz: string, func: string, args: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
        exec(resolve, reject, clazz, func, args);
    });
}

declare global {
    interface Window {
        agcEvents: {
            [key: string]: (data: any, data2?: any) => void
        },
        runAGCEvent: (eventName: string, data: any, data2?: any) => void,
        subscribeAGCEvent: (eventName: string, callback: (data: any, data2?: any) => void) => void
        [key: string]: any
    }
}

function initEventHandler() {
    if (window.agcEvents != null) return;
    window.agcEvents = {};
    window.runAGCEvent = (eventName, data, data2) => {
        if (Object.prototype.hasOwnProperty.call(window.agcEvents,eventName)){
            if (data2)
                window.agcEvents[eventName](data, data2);
            else
                window.agcEvents[eventName](data);
        }
    };
    window.subscribeAGCEvent = (eventName, handler) => {
        window.agcEvents[eventName] = handler;
    };
}

initEventHandler()

