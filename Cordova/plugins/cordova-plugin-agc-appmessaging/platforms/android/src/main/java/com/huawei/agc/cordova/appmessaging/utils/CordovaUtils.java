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
package com.huawei.agc.cordova.appmessaging.utils;

import com.huawei.agconnect.appmessaging.AGConnectAppMessagingCallback;
import com.huawei.agconnect.appmessaging.model.AppMessage;
import com.huawei.agconnect.appmessaging.model.BannerMessage;
import com.huawei.agconnect.appmessaging.model.CardMessage;
import com.huawei.agconnect.appmessaging.model.PictureMessage;

import org.apache.cordova.CordovaWebView;

import java.util.Locale;

public class CordovaUtils {
    private static String TAG = CordovaUtils.class.getSimpleName();
    private static volatile CordovaUtils cordovaUtils = null;
    private CordovaWebView webView;

    private CordovaUtils(CordovaWebView webView) {
        this.webView = webView;
    }

    public static synchronized void createInstance(CordovaWebView webView) {
        cordovaUtils = new CordovaUtils(webView);
    }

    private static String createJSCodes(AppMessage message) {
        String jsCodeToCreateMessage = null;
        if (message instanceof BannerMessage) {
            BannerMessage bannerMessage = (BannerMessage) message;
            jsCodeToCreateMessage = AppMessagingUtils.createAppMessageObject(bannerMessage, "BannerMessage");
        } else if (message instanceof CardMessage) {
            CardMessage cardMessage = (CardMessage) message;
            jsCodeToCreateMessage = AppMessagingUtils.createAppMessageObject(cardMessage, "CardMessage");
        } else if (message instanceof PictureMessage) {
            PictureMessage pictureMessage = (PictureMessage) message;
            jsCodeToCreateMessage = AppMessagingUtils.createAppMessageObject(pictureMessage, "PictureMessage");
        }
        return jsCodeToCreateMessage;
    }

    public static void sendEvent(final String eventName, AppMessage message) {
        String jsCodeToCreateMessage = createJSCodes(message);
        cordovaUtils.webView.loadUrl(String.format(Locale.ENGLISH, "javascript:window.runAGCEvent('%s',%s);", eventName, jsCodeToCreateMessage));
    }

    public static void sendEvent(final String eventName, AppMessage message, AGConnectAppMessagingCallback.DismissType dismissType) {
        String jsCodeToCreateMessage = createJSCodes(message);
        cordovaUtils.webView.loadUrl(String.format(Locale.ENGLISH, "javascript:window.runAGCEvent('%s',%s,'%s');", eventName, jsCodeToCreateMessage, dismissType));
    }
}
