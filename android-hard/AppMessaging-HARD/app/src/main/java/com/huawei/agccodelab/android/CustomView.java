/*
 * Copyright 2021. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.huawei.agccodelab.android;

import android.app.AlertDialog;
import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.huawei.agconnect.appmessaging.AGConnectAppMessagingCallback;
import com.huawei.agconnect.appmessaging.AGConnectAppMessagingDisplay;
import com.huawei.agconnect.appmessaging.model.AppMessage;
import com.huawei.agconnect.appmessaging.model.BannerMessage;
import com.huawei.agconnect.appmessaging.model.MessageType;

import androidx.annotation.NonNull;

public class CustomView implements AGConnectAppMessagingDisplay {
    private static final String TAG = "CustomView";
    MainActivity activity;

    public CustomView(MainActivity activity) {
        this.activity = activity;
    }

    @Override
    public void displayMessage(@NonNull AppMessage appMessage, @NonNull AGConnectAppMessagingCallback callback) {
        Log.d(TAG, appMessage.getId() + "");
        MessageType messageType = appMessage.getMessageType();
        if (messageType == MessageType.BANNER) {
            showDialog((BannerMessage) appMessage, callback);
        }
    }

    private void showDialog(@NonNull BannerMessage appMessage, @NonNull final AGConnectAppMessagingCallback callback) {
        View view = LayoutInflater.from(activity).inflate(R.layout.custom_view, null, false);
        final AlertDialog dialog = new AlertDialog.Builder(activity).setView(view).create();
        Button click = view.findViewById(R.id.click);
        Button dismiss = view.findViewById(R.id.dismiss);
        TextView title = view.findViewById(R.id.title);
        title.setText(appMessage.getBanner().getTitle());
        TextView content = view.findViewById(R.id.id);
        content.setText(appMessage.getBanner().getBody());
        click.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // set button callback
                callback.onMessageClick(appMessage);
                callback.onMessageDismiss(appMessage, AGConnectAppMessagingCallback.DismissType.CLICK);
                dialog.dismiss();
            }
        });

        dismiss.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //set button callback
                callback.onMessageDismiss(appMessage, AGConnectAppMessagingCallback.DismissType.CLICK);
                dialog.dismiss();
            }
        });
        dialog.show();
        dialog.getWindow().setLayout((getScreenWidth(activity) / 4 * 3), LinearLayout.LayoutParams.WRAP_CONTENT);
        callback.onMessageDisplay(appMessage);
    }


    public static int getScreenWidth(Context context) {
        return context.getResources().getDisplayMetrics().widthPixels;
    }
}
