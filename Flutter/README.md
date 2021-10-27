# AppGallery Connect App Messaging Kit Flutter Plugin - Demo

---

## Contents

  - [Introduction](#1-introduction)
  - [Installation](#2-installation)
  - [Configuration](#3-configuration)
  - [Licensing and Terms](#4-licensing-and-terms)

---

## 1. Introduction

This demo project is an example to demonstrate the features of the **AppGallery Connect Flutter App Messaging Kit
** Plugin.

---

## 2. Installation

Before you get started, you must register as a HUAWEI developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### Creating a Project in AppGallery Connect

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

**Step 1.** Set an unique **Application ID** on the app level build gradle file located on **example/android/app/build.gradle**. You should also change the **package names** for the manifest files in the **/example/android/app/src/** directory and on the **MainActivity.java** to match with the Application ID. 
  ```gradle
  <!-- Other configurations ... -->
    defaultConfig {
      // Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html). You may need to change the package name on AndroidManifest.xml and MainActivity.java respectively.
      // The Application ID here should match with the Package Name on the AppGalleryConnect
      applicationId "<Enter_your_package_name_here>" // For ex: "com.developer.appmessaging"
      minSdkVersion 19
      <!-- Other configurations ... -->
  }
  ```
**Step 2.** Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html)  and select **My projects**.

**Step 3.** Select your project from the project list or create a new one by clicking the **Add Project** button.

**Step 4.** Go to **Project Setting** > **General information**, and click **Add app**.
If an app exists in the project and you need to add a new one, expand the app selection area on the top of the page and click **Add app**.

**Step 5.** On the **Add app** page, enter the **Application ID** you've defined before as the **Package Name** here, then fill the necessary fields and click **OK**.

### Enabling App Messaging

You need to enable App Messaging before using it. If you have enabled it, skip this step.

**Step 1.** In [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html), click *My projects*.

**Step 2.** Find your project from the project list and click the app for which you need to enable App Messaging on the project card.

**Step 3:** Go to **Growing > App Messaging**. 

**Step 4:** Click **Enable now** in the upper right corner. 

**Step 5:**  The **App Messaging** service uses HUAWEI Analytics to report in-app message events. Therefore, you need to enable HUAWEI Analytics before integrating the App Messaging SDK. For details, please refer to [Enabling HUAWEI Analytics](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-enabling-0000001050745155).

For further details, please refer to [Enabling App Messaging](https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agc-appmessage-getstarted#h1-1606373400682).

### Build & Run the project

**Step 1:** Run the following command to update package info.
```
[project_path]> flutter pub get
``` 
**Step 2:** Run the following command to start the demo app.
```
[project_path]> flutter run
```
---

## 3. Configuration

### Listening for AppMessaging Events

Add a listener to obtain app message click events. 

###### Call Example

```dart
 @override
  void initState() {
    super.initState();

    _streamSubscriptionDisplay =
        agconnectAppmessaging.onMessageDisplay.listen((event) {
      print('onMessageDisplay       $event');
    });
    _streamSubscriptionClick =
        agconnectAppmessaging.onMessageClick.listen((event) {
      print('onMessageClick       $event');
    });
    _streamSubscriptionDismiss =
        agconnectAppmessaging.onMessageDismiss.listen((event) {
      print('onMessageDismiss       $event');
    });

    _streamSubscriptionError =
        agconnectAppmessaging.onMessageError.listen((event) {
      print('onMessageError       $event');
    });
  }
```


### Adding Custom View

App Messaging supports three messages types, namely pop-up, image, and banner messages. The App Messaging SDK provides a default layout for each type. You can customize the message display style that better suits your app to provide personalized experience for users.

Firstly, add a listener to obtain app message. Then you can create your own layout for app message.

```dart
    _streamSubscription1 = agconnectAppmessaging.customEvent.listen((event) {
      _showDialog(context ,event.toString());
    });
```

Below lines should be added to the corresponding platforms.

IOS:

Add the following code in AppDelegate to your project:

Set AGCCustomView field in your React-Native/iOS project info.plist file.

true: adding custom view
false: removing custom view

<dict>
 ...
 <key>AGCCustomView</key>
 <false/>
 ...
</dict>

Android:<br>
You should add below code to the onCreate method of MainActivity.java.

```java
AGCAppMessagingCustomEventStreamHandler.addCustomView();
```

### Accessing Analytics Kit

To use analytics feature, 

- Navigate into your /android/app/build.gradle and add build dependencies in the dependencies section.
   
    ```
    dependencies {
        implementation 'com.huawei.hms:hianalytics:5.1.0.301'
    }
    ```
- Navigate into your /ios file and edit the Podfile file to add the pod dependency 'HiAnalytics'
    
    - Example Podfile file:

        ```
        # Pods for AGCAppMessagingDemo
        pod 'HiAnalytics'
        ```
    
    - Run pod install to install the pods.
    
       ```
       $ pod install
       ```
    
    - Initialize the Analytics SDK using the config API in AppDelegate in iOS platform.

        Sample code for initialization in AppDelegate:
    
  ```
	import UIKit
	import Flutter
    import HiAnalytics

	@UIApplicationMain
	@objc class AppDelegate: FlutterAppDelegate {
    	    override func application(
        	_ application: UIApplication,
        	didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    	    ) -> Bool {
          // Initialize the Analytics SDK.
          HiAnalytics.config();  

        	GeneratedPluginRegistrant.register(with: self)
        	return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    	}
    }
  ```
    
    For further information please refer to [Analytics Kit Service Guide](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/introduction-0000001050745149).

---

## 4. Licensing and Terms

AppGallery Connect App Messaging Kit Flutter Plugin Demo is licensed under [Apache 2.0 license](../LICENSE)
