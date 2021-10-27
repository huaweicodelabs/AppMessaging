/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
document.addEventListener('deviceready', onDeviceReady, false);
const log = document.getElementById("log");
const img = document.getElementById('img');
const body = document.getElementById('header');
const view = document.getElementById('customView');

async function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById("setDisplayLocation").onclick = setDisplayLocation;

    AGCAppMessaging.addListener(AGCAppMessaging.Events.ON_MESSAGE_DISPLAY, async (appMessage) => {
        const id = await appMessage.getId();
        console.log("Display Event-Message ID:" + id);
    });

    AGCAppMessaging.addListener(AGCAppMessaging.Events.ON_MESSAGE_DISMISS, async (appMessage, dismissType) => {
        const id = await appMessage.getId();
        console.log("Dismiss Event-Message ID:" + id);
        console.log("Dismiss Type: " + dismissType);
    });

    AGCAppMessaging.addListener(AGCAppMessaging.Events.ON_MESSAGE_CLICK, async (appMessage) => {
        const id = await appMessage.getId();
        console.log("Click Event-Message ID:" + id);
    });

    AGCAppMessaging.addListener(AGCAppMessaging.Events.ON_MESSAGE_ERROR, async (appMessage) => {
        const id = await appMessage.getId();
        console.log("Error Event-Message ID:" + id);
    });
    let currentMessage;
    let isMessageClose = false;
    window.addEventListener("orientationchange", function () {
        if (cordova.platformId === "ios" && currentMessage !== undefined && !isMessageClose) {
            if (screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary') {
                img.src = currentMessage.getCard().getLandscapePictureUrl();
                img.style.height = '100px';
                view.style.paddingTop = '80px';
                document.getElementById('view-content').style.width = '60%';
            } else {
                img.src = currentMessage.getCard().getPortraitPictureUrl();
                view.style.paddingTop = '100px';
                document.getElementById('view-content').style.width = '80%';
                img.style.removeProperty('height');
            }
            body.innerHTML = currentMessage.getCard().getBody();
            view.style.display = 'block';
            document.getElementById('okayButton').onclick = () => {
                isMessageClose = true;
                AGCAppMessaging.AGCAppMessagingCallback.onMessageClick(currentMessage);
                view.style.display = 'none';
            };
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target === view) {
            view.style.display = 'none';
            isMessageClose = true;
            AGCAppMessaging.AGCAppMessagingCallback.onMessageDismiss(currentMessage, AGCAppMessaging.DismissType.CLICK_OUTSIDE);
        }
    };

    AGCAppMessaging.addListener(AGCAppMessaging.Events.CUSTOM_VIEW, (appMessage) => {
        console.log('isMessageClose1: ' + isMessageClose);
        currentMessage = appMessage;
        isMessageClose = false;
        if (screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary') {
            img.src = currentMessage.getCard().getLandscapePictureUrl();
            img.style.height = 150 + 'px';
            view.style.paddingTop = "30px";
        } else {
            img.src = currentMessage.getCard().getPortraitPictureUrl();
            img.style.removeProperty('height');
        }
        body.innerHTML = currentMessage.getCard().getBody();
        view.style.display = 'block';
        document.getElementById('okayButton').onclick = () => {
            isMessageClose = true;
            AGCAppMessaging.AGCAppMessagingCallback.onMessageClick(currentMessage);
            view.style.display = 'none';
        };
    });
}


async function setDisplayLocation() {
    await AGCAppMessaging.setDisplayLocation(AGCAppMessaging.Location.BOTTOM);
    log.innerHTML = "<br>" + "Display location is set as BOTTOM." + log.innerHTML;
}
