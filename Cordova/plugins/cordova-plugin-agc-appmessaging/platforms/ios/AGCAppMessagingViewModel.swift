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

import AGConnectAppMessaging
/// All the AGConnectAppMessaging API's can be reached via AGCAppMessagingViewModel class instance.
public class AGCAppMessagingViewModel{
    
    /// Data synchronization from the AppGallery Connect server.
    /// - Parameter enabled: Boolean value that refers to whether enable or disable fetch message feature.
    func setFetchMessageEnable(commandDelegate: CDVCommandDelegate,
                               callbackId: String,
                               enabled: Bool){
        AGCAppMessaging.sharedInstance().isFetchMessageEnable = enabled
        let pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK
        )
        commandDelegate.send(pluginResult, callbackId: callbackId)
    }
    
    /// Sets displayEnable in AGCAppMessaging.
    /// - Parameter enabled: Boolean value that refers to whether enable or disable display feature.
    func setDisplayEnable(commandDelegate: CDVCommandDelegate,
                          callbackId: String,
                          enabled: Bool){
        AGCAppMessaging.sharedInstance().isDisplayEnable = enabled
        let pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK
        )
        commandDelegate.send(pluginResult, callbackId: callbackId)
    }
    
    /// Returns the result of isDisplayEnable.
    func isDisplayEnable(commandDelegate: CDVCommandDelegate,
                         callbackId: String){
        let pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK,
            messageAs: ["value": AGCAppMessaging.sharedInstance().isDisplayEnable]
        )
        commandDelegate.send(pluginResult, callbackId: callbackId)
    }
    
    /// Sets whether to allow data synchronization from the AppGallery Connect server.
    func isFetchMessageEnable(commandDelegate: CDVCommandDelegate,
                              callbackId: String){
        let pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK,
            messageAs: ["value": AGCAppMessaging.sharedInstance().isFetchMessageEnable]
        )
        commandDelegate.send(pluginResult, callbackId: callbackId)
    }
    
    /// This feauture is not available by calling this method.
    /// Enable the debugging mode for your app. Add the '-AGConnectDeveloperMode' launch parameter to the app scheme. Start your app in Xcode debug mode.
    func setForceFetch(commandDelegate: CDVCommandDelegate,
                       callbackId: String){
        let pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK,
            messageAs: "Enable the debugging mode for your app. Add the '-AGConnectDeveloperMode' launch parameter to the app scheme. Start your app in Xcode debug mode."
        )
        commandDelegate.send(pluginResult, callbackId: callbackId)
    }
    
    /// Sets display location of appMessage whether at the bottom or the center.
    /// - Parameter location: Location instance that will be get via Constants.
    func setDisplayLocation(commandDelegate: CDVCommandDelegate,
                            callbackId: String,
                            location: Int){
        if(location == 0){
            AGCAppMessagingDefaultDisplay.sharedInstance().defaultLocation = AGCAppMessagingDefaultDisplayLocation.bottom
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_OK
            ), callbackId: callbackId)
        }else if(location == 1){
            AGCAppMessagingDefaultDisplay.sharedInstance().defaultLocation = AGCAppMessagingDefaultDisplayLocation.center
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_OK
            ), callbackId: callbackId)
        }else{
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_ERROR
            ), callbackId: callbackId)
        }
    }
    
    /// Triggers message display.
    /// - Parameter eventId: String instance that refers to eventId.
    func trigger(commandDelegate: CDVCommandDelegate,
                 callbackId: String,
                 eventId: String){
        AGCAppMessaging.sharedInstance().triggerEvent(eventId)
        let pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK
        )
        commandDelegate.send(pluginResult, callbackId: callbackId)
    }
}
