/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
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

#import "AppDelegate+AGCAppMessagingPlugin.h"
#import <AGConnectCore/AGConnectCore.h>
#import <objc/runtime.h>
#import "AGConnectAppMessaging/AGCAppMessaging.h"

@interface AppDelegate () <AGCAppMessagingDelegate>
@end
@implementation AppDelegate (AGCAppMessagingPlugin)

+ (void)load {
    Method original = class_getInstanceMethod(self, @selector(application:didFinishLaunchingWithOptions:));
    Method swizzled = class_getInstanceMethod(self, @selector(application:agcAppMessagingDidFinishLaunchingWithOptions:));
    method_exchangeImplementations(original, swizzled);
}

- (BOOL)application:(UIApplication*)application agcAppMessagingDidFinishLaunchingWithOptions:(NSDictionary*)launchOptions {
    [self application:application agcAppMessagingDidFinishLaunchingWithOptions:launchOptions];
    [AGCInstance startUp];
    [AGCAppMessaging sharedInstance].delegate = self;
    return YES;
}

- (void)appMessagingOnDisplay:(AGCAppMessagingDisplayMessage *)message {
    NSDictionary *userInfo =  @{ @"notificationName": @"onMessageDisplay", @"message" : message };
    [[NSNotificationCenter defaultCenter] postNotificationName: @"AGCAppMessagingNotification" object:nil userInfo:userInfo];
}
- (void)appMessagingOnClick:(AGCAppMessagingDisplayMessage *)message button:(AGCAppMessagingActionButton *)button {
    NSDictionary *userInfo =  @{ @"notificationName": @"onMessageClick", @"message" : message };
    [[NSNotificationCenter defaultCenter] postNotificationName: @"AGCAppMessagingNotification" object:nil userInfo:userInfo];
}
- (void)appMessagingOnDismiss:(AGCAppMessagingDisplayMessage *)message dismissType:(AGCAppMessagingDismissType)dismissType {
    NSMutableString *mDismissType = [NSMutableString stringWithString:@"UNKNOWN_DISMISS_TYPE"];
    switch (dismissType) {
        case AGCAppMessagingDismissTypeClick:
            [mDismissType setString:@"CLICK"];
            break;
        case AGCAppMessagingDismissTypeClickOutside:
            [mDismissType setString:@"CLICK_OUTSIDE"];
            break;
        case AGCAppMessagingDismissTypeAuto:
            [mDismissType setString:@"AUTO"];
            break;
        case AGCAppMessagingDismissTypeSwipe:
            [mDismissType setString:@"SWIPE"];
            break;
        default:
            break;
    }
    NSDictionary *userInfo = @{ @"notificationName": @"onMessageDismiss", @"dismissKey" : mDismissType, @"message" : message };
    [[NSNotificationCenter defaultCenter] postNotificationName: @"AGCAppMessagingNotification" object:nil userInfo:userInfo];
}
- (void)appMessagingOnError:(AGCAppMessagingDisplayMessage *)message {
    NSDictionary *userInfo =  @{ @"notificationName": @"onMessageError", @"message" : message };
    [[NSNotificationCenter defaultCenter] postNotificationName: @"AGCAppMessagingNotification" object:nil userInfo:userInfo];
}
@end
