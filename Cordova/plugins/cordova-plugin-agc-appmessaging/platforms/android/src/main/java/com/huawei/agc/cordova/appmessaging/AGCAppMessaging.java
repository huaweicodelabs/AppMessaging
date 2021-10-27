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
package com.huawei.agc.cordova.appmessaging;

import android.util.Log;

import com.huawei.agc.cordova.appmessaging.utils.CordovaUtils;
import com.huawei.agconnect.AGConnectInstance;
import com.huawei.agconnect.appmessaging.AGConnectAppMessaging;
import com.huawei.agconnect.appmessaging.Location;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Objects;

public class AGCAppMessaging extends CordovaPlugin {
    private static final String TAG = AGCAppMessaging.class.getSimpleName();
    private AGConnectAppMessaging agConnectAppMessaging;

    @Override
    protected void pluginInitialize() {
        super.pluginInitialize();
        Log.d(TAG, "Method:pluginInitialize()");
        CordovaUtils.createInstance(webView);
        if (AGConnectInstance.getInstance() == null) {
            AGConnectInstance.initialize(cordova.getContext());
        }
        agConnectAppMessaging = AGConnectAppMessaging.getInstance();
        agConnectAppMessaging.addOnDisplayListener(appMessage -> CordovaUtils.sendEvent("onMessageDisplay", appMessage));
        agConnectAppMessaging.addOnClickListener(appMessage -> CordovaUtils.sendEvent("onMessageClick", appMessage));
        agConnectAppMessaging.addOnDismissListener((appMessage, dismissType) -> CordovaUtils.sendEvent("onMessageDismiss", appMessage, dismissType));
        agConnectAppMessaging.addOnErrorListener(appMessage -> CordovaUtils.sendEvent("onMessageError", appMessage));
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
        cordova.getThreadPool().execute(() -> {
            try {
                switch (action) {
                    case "setFetchMessageEnable":
                        setFetchMessageEnable(args, callbackContext);
                        break;
                    case "setDisplayEnable":
                        setDisplayEnable(args, callbackContext);
                        break;
                    case "isDisplayEnable":
                        isDisplayEnable(callbackContext);
                        break;
                    case "isFetchMessageEnable":
                        isFetchMessageEnable(callbackContext);
                        break;
                    case "setForceFetch":
                        setForceFetch(callbackContext);
                        break;
                    case "setDisplayLocation":
                        setDisplayLocation(args, callbackContext);
                        break;
                    case "trigger":
                        trigger(args, callbackContext);
                        break;
                    case "addListener":
                        addListener(args, callbackContext);
                        break;
                }
            } catch (JSONException e) {
                Log.d(TAG, Objects.requireNonNull(e.getMessage()));
            }
        });
        return true;
    }

    private void addListener(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String method = args.getString(0);
        Log.i(TAG, "addListener: " + method);
        callbackContext.success();
    }

    private void trigger(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String eventId = args.getString(0);
        agConnectAppMessaging.trigger(eventId);
        callbackContext.success();
    }

    private void setDisplayLocation(JSONArray args, CallbackContext callbackContext) {
        int locationValue = args.optInt(0, 0);
        if (locationValue == 0) {
            agConnectAppMessaging.setDisplayLocation(Location.BOTTOM);
        } else {
            agConnectAppMessaging.setDisplayLocation(Location.CENTER);
        }
        callbackContext.success();
    }

    private void setForceFetch(CallbackContext callbackContext) {
        agConnectAppMessaging.setForceFetch();
        callbackContext.success("enabled");
    }

    private void isFetchMessageEnable(CallbackContext callbackContext) throws JSONException {
        boolean enabled = agConnectAppMessaging.isFetchMessageEnable();
        callbackContext.success(new JSONObject().put("value", enabled));
    }

    private void isDisplayEnable(CallbackContext callbackContext) throws JSONException {
        boolean enabled = agConnectAppMessaging.isDisplayEnable();
        callbackContext.success(new JSONObject().put("value", enabled));
    }

    private void setDisplayEnable(JSONArray args, CallbackContext callbackContext) throws JSONException {
        boolean enabled = args.getBoolean(0);
        agConnectAppMessaging.setDisplayEnable(enabled);
        callbackContext.success();
    }

    private void setFetchMessageEnable(JSONArray args, CallbackContext callbackContext) throws JSONException {
        boolean enabled = args.getBoolean(0);
        agConnectAppMessaging.setFetchMessageEnable(enabled);
        callbackContext.success();
    }
}
