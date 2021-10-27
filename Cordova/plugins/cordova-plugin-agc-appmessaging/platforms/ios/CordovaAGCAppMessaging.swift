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

@objc(CordovaAGCAppMessaging) class CordovaAGCAppMessaging : CDVPlugin {
    
    /// All the AGConnectAppMessaging API's can be reached via AGCAppMessagingViewModel class instance
    private lazy var viewModel: AGCAppMessagingViewModel = AGCAppMessagingViewModel()
    private var jsonString:String = ""
    private var messageType:String = ""
    private var dismissType:String = ""
    private var notificationEventName: String = ""
    override func pluginInitialize() {
        super.pluginInitialize()
        NotificationCenter.default.addObserver(self, selector: #selector(self.getResolved(_:)), name: Notification.Name.AGCNotification, object: nil)
    }
    private func hexStringFromColor(color: UIColor) -> String {
        let components = color.cgColor.components
        let r: CGFloat = components?[0] ?? 0.0
        let g: CGFloat = components?[1] ?? 0.0
        let b: CGFloat = components?[2] ?? 0.0
        let hexString = String.init(format: "#%02lX%02lX%02lX", lroundf(Float(r * 255)), lroundf(Float(g * 255)), lroundf(Float(b * 255)))
        return hexString
    }
    
    @objc(getResolved:)
    func getResolved(_ notification: NSNotification) {
        
        if let appMessage = notification.userInfo as NSDictionary? {
            
            if let notificationName = appMessage["notificationName"] as? String {
                self.notificationEventName = notificationName
                var appMessageData:[String: Any] = [:]
                if let message = appMessage["message"] as? AGCAppMessagingDisplayMessage {
                    
                    var base:[String: Any] = [:]
                    base["id"] = "\(message.messageId)"
                    base["startTime"] = Int(message.startTime.timeIntervalSince1970*1000)
                    if let endTime = message.endTime {
                        base["endTime"] = Int(endTime.timeIntervalSince1970*1000)
                    }else {
                        base["endTime"] = -1
                    }
                    base["frequencyType"] = message.frequencyType.rawValue
                    base["frequencyValue"] = message.frequencyValue
                    if(!message.isTest){
                        base["testFlag"] = 0
                    }else{
                        base["testFlag"] = 1
                    }
                    base["triggerEvents"] = message.triggerEvents
                    let mType = message.messageType
                    switch mType {
                    case AGCAppMessagingDisplayMessageType.card:
                        base["messageType"] = "CARD"
                    case AGCAppMessagingDisplayMessageType.banner:
                        base["messageType"] = "BANNER"
                    case AGCAppMessagingDisplayMessageType.picture:
                        base["messageType"] = "PICTURE"
                    case AGCAppMessagingDisplayMessageType.unknown:
                        base["messageType"] = "UN_SUPPORT"
                    default :
                        print("error messageType")
                    }
                    appMessageData["base"] = base
                }
                
                if let message = appMessage["message"] as? AGCAppMessagingCardDisplay {
                    messageType = "CardMessage"
                    var card:[String: Any] = [:]
                    card["title"] = message.title
                    card["titleColor"] = hexStringFromColor(color: message.titleColor)
                    card["titleColorOpenness"] = Double (message.titleColor.cgColor.alpha)*100
                    card["body"] = message.body
                    card["bodyColor"] = hexStringFromColor(color: message.bodyColor)
                    card["bodyColorOpenness"] = Double (message.bodyColor.cgColor.alpha)*100
                    card["backgroundColor"] = hexStringFromColor(color: message.backgroundColor)
                    card["backgroundColorOpenness"] = Double (message.backgroundColor.cgColor.alpha)*100
                    card["portraitPictureURL"] = message.portraitPictureURL?.absoluteString
                    card["landscapePictureURL"] = message.landscapePictureURL?.absoluteString
                    
                    var majorButton:[String: Any] = [:]
                    if let majorButtonText = message.majorButton?.text {
                        majorButton["text"] = majorButtonText
                    }
                    if let majorButtonTextColor = message.majorButton?.textColor {
                        majorButton["textColor"] = hexStringFromColor(color: majorButtonTextColor)
                    }
                    if let majorButtonTextColorOpenness = message.majorButton?.textColor.cgColor.alpha {
                        majorButton["textColorOpenness"] = Double (majorButtonTextColorOpenness)*100
                    }
                    if let majorButtonActionURL = message.majorButton?.actionURL?.absoluteString {
                        majorButton["actionURL"] = majorButtonActionURL
                    }
                    card["majorButton"] = majorButton
                    
                    var minorButton:[String: Any] = [:]
                    if let minorButtonText = message.minorButton?.text {
                        minorButton["text"] = minorButtonText
                    }
                    if let minorButtonTextColor = message.minorButton?.textColor {
                        minorButton["textColor"] = hexStringFromColor(color: minorButtonTextColor)
                    }
                    if let minorButtonTextColorOpenness = message.minorButton?.textColor.cgColor.alpha {
                        minorButton["textColorOpenness"] = Double (minorButtonTextColorOpenness)*100
                    }
                    if let minorButtonActionURL = message.minorButton?.actionURL?.absoluteString {
                        minorButton["actionURL"] = minorButtonActionURL
                    }
                    card["minorButton"] = minorButton
                    appMessageData["card"] = card
                }
                else if let message = appMessage["message"] as? AGCAppMessagingPictureDisplay {
                    messageType = "PictureMessage"
                    var picture:[String: Any] = [:]
                    picture["pictureURL"] = message.pictureURL?.absoluteString
                    picture["actionURL"] = message.actionURL?.absoluteString
                    appMessageData["picture"] = picture
                }
                else if let message = appMessage["message"] as? AGCAppMessagingBannerDisplay {
                    messageType = "BannerMessage"
                    var banner:[String: Any] = [:]
                    banner["title"] = message.title
                    banner["titleColor"] = hexStringFromColor(color: message.titleColor)
                    banner["titleColorOpenness"] = Double (message.titleColor.cgColor.alpha)*100
                    banner["body"] = message.body
                    banner["bodyColor"] = hexStringFromColor(color: message.bodyColor)
                    banner["bodyColorOpenness"] = Double (message.bodyColor.cgColor.alpha)*100
                    banner["backgroundColor"] = hexStringFromColor(color: message.backgroundColor)
                    banner["backgroundColorOpenness"] = Double (message.backgroundColor.cgColor.alpha)*100
                    banner["pictureURL"] = message.pictureURL?.absoluteString
                    banner["actionURL"] = message.actionURL?.absoluteString
                    appMessageData["banner"] = banner
                }
                
                let jsonData = try! JSONSerialization.data(withJSONObject: (appMessageData), options: JSONSerialization.WritingOptions.prettyPrinted)
                jsonString = NSString(data: jsonData, encoding: String.Encoding.utf8.rawValue)! as String
                
                if(notificationName != "onMessageDismiss"){
                    self.commandDelegate.evalJs("javascript:window.runAGCEvent('\(notificationName)', new AGCAppMessaging.\(messageType)(\(jsonString)));")
                    
                }
                else{
                    dismissType = appMessage["dismissKey"] as! String
                    self.commandDelegate.evalJs("javascript:window.runAGCEvent('\(notificationName)', new AGCAppMessaging.\(messageType)(\(jsonString)), '\(dismissType)');")
                    
                }
            }
        }
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
    @objc(setFetchMessageEnable:)
    func setFetchMessageEnable(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        guard let args = command.arguments[0] as? Bool else{
            let pluginResult = CDVPluginResult (
                status: CDVCommandStatus_ERROR,
                messageAs: "Error arguments paramater. methodName : " + command.methodName
            )
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
            return
        }
        viewModel.setFetchMessageEnable(commandDelegate: self.commandDelegate,
                                        callbackId: command.callbackId,
                                        enabled: args)
    }
    @objc(setDisplayEnable:)
    func setDisplayEnable(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        guard let args = command.arguments[0] as? Bool else{
            let pluginResult = CDVPluginResult (
                status: CDVCommandStatus_ERROR,
                messageAs: "Error arguments paramater. methodName : " + command.methodName
            )
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
            return
        }
        viewModel.setDisplayEnable(commandDelegate: self.commandDelegate,
                                   callbackId: command.callbackId,
                                   enabled: args)
        
    }
    @objc(isDisplayEnable:)
    func isDisplayEnable(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        viewModel.isDisplayEnable(commandDelegate: self.commandDelegate,
                                  callbackId: command.callbackId)
        
    }
    @objc(isFetchMessageEnable:)
    func isFetchMessageEnable(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        viewModel.isFetchMessageEnable(commandDelegate: self.commandDelegate,
                                       callbackId: command.callbackId)
        
    }
    @objc(setForceFetch:)
    func setForceFetch(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        viewModel.setForceFetch(commandDelegate: self.commandDelegate,
                                callbackId: command.callbackId)
    }
    @objc(setDisplayLocation:)
    func setDisplayLocation(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        guard let args = command.arguments[0] as? Int else{
            let pluginResult = CDVPluginResult (
                status: CDVCommandStatus_ERROR,
                messageAs: "Error arguments paramater. methodName : " + command.methodName
            )
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
            return
        }
        viewModel.setDisplayLocation(commandDelegate: self.commandDelegate,
                                     callbackId: command.callbackId,
                                     location: args)
        
    }
    @objc(trigger:)
    func trigger(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        guard let args = command.arguments[0] as? String else{
            let pluginResult = CDVPluginResult (
                status: CDVCommandStatus_ERROR,
                messageAs: "Error arguments paramater. methodName : " + command.methodName
            )
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
            return
        }
        viewModel.trigger(commandDelegate: self.commandDelegate,
                          callbackId: command.callbackId,
                          eventId: args)
        
    }
    @objc(addListener:)
    func addListener(command: CDVInvokedUrlCommand) {
        AGCAppMessagingLog.showInPanel(message: #function, type: .call)
        guard let eventName = command.arguments[0] as? String else{
            let pluginResult = CDVPluginResult (
                status: CDVCommandStatus_ERROR,
                messageAs: "Error arguments paramater. methodName : " + command.methodName
            )
            self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
            return
        }
        switch eventName {
        case "onMessageDisplay":
            if(!jsonString.isEmpty && notificationEventName == "onMessageDisplay"){
                self.commandDelegate.evalJs("javascript:window.runAGCEvent('\(eventName)', new AGCAppMessaging.\(messageType)(\(jsonString)));")
            }
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: "Added listener onMessageDisplay"
            ), callbackId: command.callbackId)
        case "onMessageClick":
            if(!jsonString.isEmpty && notificationEventName == eventName){
                self.commandDelegate.evalJs("javascript:window.runAGCEvent('\(eventName)', new AGCAppMessaging.\(messageType)(\(jsonString)));")
            }
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: "Added listener onMessageClick"
            ), callbackId: command.callbackId)
        case "onMessageDismiss":
            if(!jsonString.isEmpty && notificationEventName == eventName){
                self.commandDelegate.evalJs("javascript:window.runAGCEvent('\(eventName)', new AGCAppMessaging.\(messageType)(\(jsonString)), '\(dismissType)');")
            }
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: "Added listener onMessageDismiss"
            ), callbackId: command.callbackId)
        case "onMessageError":
            if(!jsonString.isEmpty && notificationEventName == eventName){
                self.commandDelegate.evalJs("javascript:window.runAGCEvent('\(eventName)', new AGCAppMessaging.\(messageType)(\(jsonString)));")
            }
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: "Added listener onMessageError"
            ), callbackId: command.callbackId)
        default:
            commandDelegate.send(CDVPluginResult(
                status: CDVCommandStatus_ERROR
            ), callbackId: command.callbackId)
        }
    }
}

public extension Notification.Name {
    static let AGCNotification = Notification.Name(rawValue: "AGCAppMessagingNotification")
}
