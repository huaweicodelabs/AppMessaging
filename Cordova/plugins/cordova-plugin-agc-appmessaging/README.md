# Cordova Plugin AGC App Messaging

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Obtaining agconnect-services.json and agconnect-services.plist](#22-obtaining-agconnect-servicesjson-and-agconnect-servicesplist)
  - [2.3. Cordova](#23-cordova)
    - [2.3.1. iOS App Development](#231-ios-app-development)
    - [2.3.2. Android App Development](#232-android-app-development)
  - [2.4. Ionic](#24-ionic)
    - [2.4.1. iOS App Development](#241-ios-app-development)
    - [2.4.2. Android App Development](#242-android-app-development)
- [3. API Reference](#3-api-reference)
    - [3.1. AGCAppMessaging](#31-agcappmessaging)
    - [3.2. BannerMessage](#32-bannermessage)
    - [3.3. Banner](#33-banner)
    - [3.4. CardMessage](#34-cardmessage)
    - [3.5. Card](#35-card)
    - [3.6. Button](#36-button)
    - [3.7. PictureMessage](#37-picturemessage)
    - [3.8. Picture](#38-picture)
    - [3.9. Constants](#39-constants)
    - [3.10. Data Types](#310-data-types)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Licensing and Terms](#6-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei App Messaging SDK and Cordova platform. It exposes all functionality provided by Huawei App Messaging SDK.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### 2.1. Creating a Project in AppGallery Connect

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select **My projects**.
2. Select your project from the project list or create a new one by clicking the **Add Project** button.
3. Go to **Project settings** > **General information**, and click **Add App**.
   If an app exists in the project, and you need to add a new one, expand the app selection area on the top of the page and click **Add App**.
4. On the **Add App** page, enter the app information, and click **OK**.

### 2.2. Obtaining agconnect-services.json and agconnect-services.plist

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project settings** > **General information**. In the **App information** field,

   - If platform is Android, click **agconnect-services.json** button to download the configuration file.
   - If platform is iOS, click **agconnect-services.plist** button to download the configuration file.

### 2.3. Cordova

1. Install Cordova CLI.

   ```bash
   npm install -g cordova
   ```

2. Create a new Cordova project or use existing Cordova project.

   - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** and **`agconnect-services.plist`** files.

4. Add the **Android** or **iOS** platform to the project if haven't done before.

   ```bash
   cordova platform add android
   ```

   ```bash
   cordova platform add ios
   ```

5. Install `AGC App Messaging Cordova Plugin` to the project.

- Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @cordova-plugin-agconnect/appmessaging
    ```

#### 2.3.1. iOS App Development

1. Add **`agconnect-services.plist`** file to the app's root directory of your Xcode project.

2. Check Signing & Capabilities tab page of your Xcode project.

3. Run the application.

    ```bash
    cordova run ios --device
    ```

#### 2.3.2. Android App Development

1. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory your Android project.

2. Run the application.

   ```bash
   cordova run android --device
   ```

### 2.4. Ionic

1. Install Ionic CLI.

   ```bash
   npm install -g @ionic/cli
   ```

2. Create a new Ionic project or use existing Ionic project.

   - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

3. Enable the **Cordova integration** if haven't done before.

   ```bash
   ionic integrations enable cordova
   ```

4. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** and **`agconnect-services.plist`** files.

5. Set preference in your Ionic project config.xml.

   ```xml
   <!--platform iOS-->
    <preference name="deployment-target" value="11.0" />
    <preference name="SwiftVersion" value="5" />
   ```

6. Add the **Android** or **iOS** platform to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```
    
    ```bash
    ionic cordova platform add ios
    ```

7. Install `AGC App Messaging Cordova Plugin` to the project.

   a. Run the following command in the root directory of your project to install it through **npm**.

   ```bash
   ionic cordova plugin add @cordova-plugin-agconnect/appmessaging
   ```

8. Copy **agc-appmessaging** folder from **`node_modules/@cordova-plugin-agconnect/appmessaging/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

##### 2.4.1 iOS App Development

1. Add **`agconnect-services.plist`** file to the app's root directory of your Xcode project.

2. Check Signing & Capabilities tab page of your Xcode project.

3. Run the application.

    ```bash
    ionic cordova run ios --device
    ```

##### 2.4.2. Android App Development

1. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory your Android project.

2. Run the application.

   ```bash
   ionic cordova run android --device
   ```
   
- By default, App Messaging SDK works in any one of portrait-primary, portrait-secondary, landscape-primary and landscape-secondary. To make your app's orientation work by default, **orientation** keyword should be removed from **android:configChanges** property of Activity tag in **AndroidManifest.xml** file. 

  Below is an example:

    ```xml
  <!-- AndroidManifest.xml. -->
  <activity
          android:name="MainActivity"
          android:label="@string/app_name"
          android:configChanges="keyboard|keyboardHidden|screenSize|uiMode"
          android:launchMode="singleTask"
          android:windowSoftInputMode="adjustResize">
      <intent-filter>
          <action android:name="android.intent.action.MAIN" />
          <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
  </activity>
    ```

---

## 3. API Reference

### 3.1. AGCAppMessaging

Represents the message processing class.

#### Public Method Summary

| Method                                                 | Return Type        | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| setFetchMessageEnable(enabled:boolean)                 | `Promise<void>`    | Sets whether to allow the App Messaging SDK to synchronize in-app message data from the AppGallery Connect server.                                                                                                             |
| setDisplayEnable(enabled:boolean)                      | `Promise<void>`    | Sets whether to allow the App Messaging SDK to display in-app messages.                                                                                                                                                        |
| isDisplayEnable()                                      | `Promise<boolean>` | Checks whether the App Messaging SDK is allowed to display in-app messages.                                                                                                                                                    |
| isFetchMessageEnable()                                 | `Promise<boolean>` | Checks whether the App Messaging SDK is allowed to synchronize in-app message data from the AppGallery Connect server.                                                                                                         |
| addListener(event: Events, callback: (appMessage: CardMessage or PictureMessage or BannerMessage, dismissType?: DismissType) => void) | `Promise<void>`    | Adds a listener for given event value.                                                                                                          |
| setForceFetch()                                        | `Promise<string>`    | Sets the forcible in-app message data obtaining flag. When the flag is enabled, you can obtain latest in-app message data from the AppGallery Connect server in real time. This method is only to support on Android Platform. |
| setDisplayLocation(location:Location)                  | `Promise<void>`    | Sets the display position of a pop-up or image message.                                                                                                                                                                        |
| trigger(eventId:string)                                | `Promise<void>`    | Triggers a custom event.                                                                                                                                                                                                       |

#### Public Methods

##### setFetchMessageEnable(enabled:boolean)

Sets whether to allow the App Messaging SDK to synchronize in-app message data from the AppGallery Connect Server.

###### Parameters

| Name    | Type    | Description                                                                                                                                                                                                  |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enabled | boolean | Indicates whether to allow the App Messaging SDK to synchronize in-app message data from the AppGallery Connect server. The options are as follows:<br>true: yes<br>false: no.<br>The default value is true. |

###### Return Type

| Type            | Description    |
| --------------- | -------------- |
| `Promise<void>` | Empty Promise. |

###### Call Example

```ts
async function setFetchMessageEnable() {
  const enabled: boolean = true;
  await AGCAppMessaging.setFetchMessageEnable(enabled);
}
```

##### setDisplayEnable(enabled:boolean)

Sets whether to allow the App Messaging SDK to display in-app messages.

###### Parameters

| Name    | Type    | Description                                                                                                                                                     |
| ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled | boolean | Indicates whether to allow the App Messaging SDK to display in-app messages.The options are as follows:<br>true: yes<br>false: no<br>The default value is true. |

###### Return Type

| Type            | Description    |
| --------------- | -------------- |
| `Promise<void>` | Empty Promise. |

###### Call Example

```ts
async function setDisplayEnable() {
  const enabled: boolean = true;
  await AGCAppMessaging.setDisplayEnable(enabled);
}
```

##### isDisplayEnable()

Checks whether to allow the App Messaging SDK to display in-app messages.

###### Return Type

| Type               | Description                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Indicates whether to allow the App Messaging SDK to display in-app messages. The options are as follows:<br>true: yes<br>false: no |

###### Call Example

```ts
async function isDisplayEnable() {
  await AGCAppMessaging.isDisplayEnable();
}
```

##### isFetchMessageEnable()

Checks whether to allow the App Messaging SDK to synchronize in-app message data from the AppGallery Connect Server.

###### Return Type

| Type               | Description                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Indicates whether to allow the App Messaging SDK to synchronize in-app message data from the AppGallery Connect server. The options are as follows:<br>true: yes<br>false: no |

###### Call Example

```ts
async function isFetchMessageEnable() {
  await AGCAppMessaging.isFetchMessageEnable();
}
```

##### addListener(event: Events, callback: (appMessage: CardMessage | PictureMessage | BannerMessage, dismissType?: DismissType) => void)

Adds a listener for given event value.

###### Parameters

| Name     | Type       | Description                                                 |
| -------- | ---------- | ----------------------------------------------------------- |
| event    | Events     | Indicated which event listener will be added for.           |
| callback | function   | Callback function called when the given event is triggered. |

###### Return Type

| Type            | Description    |
| --------------- | -------------- |
| `Promise<void>` | Empty Promise. |

###### Call Example

```ts
async function addListener() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const id: string = appMessage.getId();
    }
  );
}
```

##### setForceFetch()

Sets the flag for whether to obtain in-app message data from the AppGallery Connect Server in real time by force.

After this method is called, the App Messaging SDK does not immediately request data from the AppGallery Connect Server. When the next trigger event takes place, the App Messaging SDK forcibly obtains in-app message data from the AppGallery Connect Server.
**For iOS platform:** Enable the debugging mode for your app. Add the '-AGConnectDeveloperMode' launch parameter to the app scheme. Start your app in Xcode debug-mode.
Notice:

- The setForceFetch API can be used only for message testing.
- The forcible data obtaining flag is bound to the AAID of the test device. After you uninstall and reinstall the app or clear app data on the device, the flag will be reset.

###### Return Type

| Type            | Description    |
| --------------- | -------------- |
| `Promise<string>` | Returns string 'Enabled' if operation is successful. |

###### Call Example

```ts
async function setForceFetch() {
    const result: string = await AGCAppMessaging.setForceFetch();
    console.log(result);
}
```

##### setDisplayLocation(location:Location)

Sets the display position of a pop-up or image message.

###### Parameters

| Name     | Type     | Description        |
| -------- | -------- | ------------------ |
| location | Location | Location instance. |

###### Return Type

| Type            | Description    |
| --------------- | -------------- |
| `Promise<void>` | Empty Promise. |

###### Call Example

```ts
async function setDisplayLocation() {
  const location: Location = Location.BOTTOM;
  await AGCAppMessaging.setDisplayLocation(location);
}
```

##### trigger(eventId:string)

Triggers a custom event.

###### Parameters

| Name    | Type   | Description           |
| ------- | ------ | --------------------- |
| eventId | string | ID of a custom event. |

###### Return Type

| Type            | Description    |
| --------------- | -------------- |
| `Promise<void>` | Empty Promise. |

###### Call Example

```ts
async function trigger() {
  const eventId = "OnAppForeGround";
  await AGCAppMessaging.trigger(eventId);
}
```

### 3.2. BannerMessage

Represents the banner message object class.

#### Public Method Summary

| Method              | Return Type   | Description                                         |
| ------------------- | ------------- | --------------------------------------------------- |
| getId()             | `string`      | Obtains the ID of an in-app message.                |
| getMessageType()    | `MessageType` | Obtains the message type.                           |
| getStartTime()      | `number`      | Obtains the start timestamp of a message.           |
| getEndTime()        | `number`      | Obtains the end timestamp of a message.             |
| getFrequencyType()  | `number`      | Obtains the display frequency type of a message.    |
| getFrequencyValue() | `number`      | Obtains the display frequency of a message.         |
| getTestFlag()       | `TestFlag`    | Checks whether an in-app message is a test message. |
| getTriggerEvents()  | `string[]`    | Obtain the ID of a trigger event.                   |
| getBanner()         | `Banner`      | Obtains the banner information of a message.        |

#### Public Methods

##### getId()

Obtains the ID of an in-app message.

###### Return Type

| Type     | Description |
| -------- | ----------- |
| `string` | Message ID. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const id: string = appMessage.getId();
      console.log(id);
    }
  );
}
```

##### getMessageType()

Obtains the message type.

###### Return Type

| Type          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `MessageType` | Message type. The banner message type is MessageType.BANNER. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const messageType: MessageType = appMessage.getMessageType();
      console.log(messageType);
    }
  );
}
```

##### getStartTime()

Obtains the start timestamp of a message.

###### Return Type

| Type     | Description                                             |
| -------- | ------------------------------------------------------- |
| `number` | Start timestamp of a message, accurate to milliseconds. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const startTime: number = appMessage.getStartTime();
      console.log(startTime);
    }
  );
}
```

##### getEndTime()

Obtains the end timestamp of a message.

###### Return Type

| Type     | Description                                           |
| -------- | ----------------------------------------------------- |
| `number` | End timestamp of a message, accurate to milliseconds. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const endTime: number = appMessage.getEndTime();
      console.log(endTime);
    }
  );
}
```

##### getFrequencyType()

Obtains the display frequency of a message.

###### Return Type

| Type     | Description                                                                                                                                                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | Display frequency type of a message. The options are as follows: <br/>1: only once.<br/>2: once every X days. The value of X is the return value of getFrequencyValue.<br/>3: X days per day The value of X is the return value of getFrequencyValue. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const frequencyType: number = appMessage.getFrequencyType();
      console.log(frequencyType);
    }
  );
}
```

##### getFrequencyValue()

Obtains the display frequency limit of an in-app message.

###### Return Type

| Type     | Description                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| `number` | Display frequency limit of an in-app message. This parameter is valid only when getFrequencyType is set to 2 or 3. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const frequencyValue: number = appMessage.getFrequencyValue();
      console.log(frequencyValue);
    }
  );
}
```

##### getTestFlag()

Checks whether an in-app message is a test message.

###### Return Type

| Type       | Description                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `TestFlag` | Checks whether an in-app message is a test message. The options are as follows:<br/>1: test message<br/>0: non-test message |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const testFlag: TestFlag = appMessage.getTestFlag();
      console.log(testFlag);
    }
  );
}
```

##### getTriggerEvents()

A collection of in-app message trigger event types, which are selected by you in AppGallery Connect.

###### Return Type

| Type       | Description                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `string[]` | A collection of in-app message trigger event types.The App Messaging SDK matches an event ID with the trigger event types of an in-app message. If the ID is in TriggerEvent, the message will be displayed. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const triggerEvents: string[] = appMessage.getTriggerEvents();
      console.log(triggerEvents);
    }
  );
}
```

##### getBanner()

Obtains the banner information of a message.

###### Return Type

| Type     | Description                      |
| -------- | -------------------------------- |
| `Banner` | Banner information of a message. |

###### Call Example

```ts
async function example() {
  const banner: Banner = appMessage.getBanner();
  console.log(JSON.stringify(banner));
}
```

### 3.3. Banner

Represents a banner message.

#### Public Method Summary

| Method                       | Return Type | Description                                                    |
| ---------------------------- | ----------- | -------------------------------------------------------------- |
| getTitle()                   | `string`    | Obtains the title of a banner message.                         |
| getTitleColor()              | `string`    | Obtains the title color of a banner message.                   |
| getTitleColorOpenness()      | `number`    | Obtains the title color transparency of a banner message.      |
| getBody()                    | `string`    | Obtains the body of a banner message.                          |
| getBodyColor()               | `string`    | Obtains the body color of a banner message.                    |
| getBodyColorOpenness()       | `number`    | Obtains the body color transparency of a banner message.       |
| getBackgroundColor()         | `string`    | Obtains the background color of a banner message.              |
| getBackgroundColorOpenness() | `number`    | Obtains the background color transparency of a banner message. |
| getPictureUrl()              | `string`    | Obtains the image URL of a banner message.                     |
| getActionUrl()               | `string`    | Obtains the redirection URL in a banner message.               |

#### Public Methods

##### getTitle()

Obtains the title of a banner message.

###### Return Type

| Type     | Description                |
| -------- | -------------------------- |
| `string` | Title of a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const title: string = banner.getTitle();
      console.log(title);
    }
  );
}
```

##### getTitleColor()

Obtains the title color of a banner message.

###### Return Type

| Type     | Description                      |
| -------- | -------------------------------- |
| `string` | Title color of a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const titleColor: string = banner.getTitleColor();
      console.log(titleColor);
    }
  );
}
```

##### getTitleColorOpenness()

Obtains the title color transparency of a banner message.

###### Return Type

| Type     | Description                                   |
| -------- | --------------------------------------------- |
| `number` | Title color transparency of a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const titleColorOpenness: number = banner.getTitleColorOpenness();
      console.log(titleColorOpenness);
    }
  );
}
```

##### getBody()

Obtains the body of a banner message.

###### Return Type

| Type     | Description               |
| -------- | ------------------------- |
| `string` | Body of a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const body: string = banner.getBody();
      console.log(body);
    }
  );
}
```

##### getBodyColor()

Obtains the body color of a banner message.

###### Return Type

| Type     | Description                     |
| -------- | ------------------------------- |
| `string` | Body color of a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const bodyColor: string = banner.getBodyColor();
      console.log(bodyColor);
    }
  );
}
```

##### getBodyColorOpenness()

Obtains the body color transparency of a banner message.

###### Return Type

| Type     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| `number` | Body color transparency of a banner message. The value ranges from 0 to 100. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const bodyColorOpenness: number = banner.getBodyColorOpenness();
      console.log(bodyColorOpenness);
    }
  );
}
```

##### getBackgroundColor()

Obtains the background color of a banner message.

###### Return Type

| Type     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `string` | Background color of a banner message, which is an RGB value. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const backgroundColor: string = banner.getBackgroundColor();
      console.log(backgroundColor);
    }
  );
}
```

##### getBackgroundColorOpenness()

Obtains the background color transparency of a banner message.

###### Return Type

| Type     | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| `number` | Background color transparency of a banner message. The value ranges from 0 to 100. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const backgroundColorOpenness: string = banner.getBackgroundColorOpenness();
      console.log(backgroundColorOpenness);
    }
  );
}
```

##### getPictureUrl()

Obtains the image URL of a banner message.

###### Return Type

| Type     | Description                    |
| -------- | ------------------------------ |
| `string` | Image URL of a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const pictureUrl: string = banner.getPictureUrl();
      console.log(pictureUrl);
    }
  );
}
```

##### getActionUrl()

Obtains the redirection URL in a banner message.

###### Return Type

| Type     | Description                          |
| -------- | ------------------------------------ |
| `string` | Redirection URL in a banner message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const banner: Banner = appMessage.getBanner();
      const actionUrl: string = banner.getActionUrl();
      console.log(actionUrl);
    }
  );
}
```

### 3.4. CardMessage

Represents a pop-up message.

#### Public Method Summary

| Method              | Return Type   | Description                                         |
| ------------------- | ------------- | --------------------------------------------------- |
| getId()             | `string`      | Obtains the ID of an in-app message.                |
| getMessageType()    | `MessageType` | Obtains the message type.                           |
| getStartTime()      | `number`      | Obtains the start timestamp of a message.           |
| getEndTime()        | `number`      | Obtains the end timestamp of a message.             |
| getFrequencyType()  | `number`      | Obtains the display frequency type of a message.    |
| getFrequencyValue() | `number`      | Obtains the display frequency of a message.         |
| getTestFlag()       | `TestFlag`    | Checks whether an in-app message is a test message. |
| getTriggerEvents()  | `string[]`    | Obtain the ID of a trigger event.                   |
| getCard()           | `Card`        | Obtains the card information of a pop-up message.   |

#### Public Methods

##### getId()

Obtains the ID of an in-app message.

###### Return Type

| Type     | Description |
| -------- | ----------- |
| `string` | Message ID. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const id: string = appMessage.getId();
      console.log(id);
    }
  );
}
```

##### getMessageType()

Obtains the message type.

###### Return Type

| Type          | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `MessageType` | Message type. The banner message type is MessageType.CARD. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const messageType: MessageType = appMessage.getMessageType();
      console.log(messageType);
    }
  );
}
```

##### getStartTime()

Obtains the start timestamp of a message.

###### Return Type

| Type     | Description                                             |
| -------- | ------------------------------------------------------- |
| `number` | Start timestamp of a message, accurate to milliseconds. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const startTime: number = appMessage.getStartTime();
      console.log(startTime);
    }
  );
}
```

##### getEndTime()

Obtains the end timestamp of a message.

###### Return Type

| Type     | Description                                           |
| -------- | ----------------------------------------------------- |
| `number` | End timestamp of a message, accurate to milliseconds. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const endTime: number = appMessage.getEndTime();
      console.log(endTime);
    }
  );
}
```

##### getFrequencyType()

Obtains the display frequency of a message.

###### Return Type

| Type     | Description                                                                                                                                                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | Display frequency type of a message. The options are as follows: <br/>1: only once.<br/>2: once every X days. The value of X is the return value of getFrequencyValue.<br/>3: X days per day The value of X is the return value of getFrequencyValue. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const frequencyType: number = appMessage.getFrequencyType();
      console.log(frequencyType);
    }
  );
}
```

##### getFrequencyValue()

Obtains the display frequency limit of an in-app message.

###### Return Type

| Type     | Description                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| `number` | Display frequency limit of an in-app message. This parameter is valid only when getFrequencyType is set to 2 or 3. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const frequencyValue: number = appMessage.getFrequencyValue();
      console.log(frequencyValue);
    }
  );
}
```

##### getTestFlag()

Checks whether an in-app message is a test message.

###### Return Type

| Type       | Description                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `TestFlag` | Checks whether an in-app message is a test message. The options are as follows:<br/>1: test message<br/>0: non-test message |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const testFlag: TestFlag = appMessage.getTestFlag();
      console.log(testFlag);
    }
  );
}
```

##### getTriggerEvents()

A collection of in-app message trigger event types, which are selected by you in AppGallery Connect.

###### Return Type

| Type       | Description                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `string[]` | A collection of in-app message trigger event types.The App Messaging SDK matches an event ID with the trigger event types of an in-app message. If the ID is in TriggerEvent, the message will be displayed. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const triggerEvents: string[] = appMessage.getTriggerEvents();
      console.log(triggerEvents);
    }
  );
}
```

##### getCard()

Obtains the card information of a pop-up message.

###### Return Type

| Type   | Description                                       |
| ------ | ------------------------------------------------- |
| `Card` | Obtains the card information of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      console.log(JSON.stringify(card));
    }
  );
}
```

### 3.5. Card

Represents the card class in a pop-up message.

#### Public Method Summary

| Method                       | Return Type | Description                                                    |
| ---------------------------- | ----------- | -------------------------------------------------------------- |
| getTitle()                   | `string`    | Obtains the title of a pop-up message.                         |
| getTitleColor()              | `string`    | Obtains the title color of a pop-up message.                   |
| getTitleColorOpenness()      | `number`    | Obtains the title color transparency of a pop-up message.      |
| getBody()                    | `string`    | Obtains the body of a pop-up message.                          |
| getBodyColor()               | `string`    | Obtains the body color of a pop-up message.                    |
| getBodyColorOpenness()       | `number`    | Obtains the body color transparency of a pop-up message.       |
| getBackgroundColor()         | `string`    | Obtains the background color of a pop-up message.              |
| getBackgroundColorOpenness() | `number`    | Obtains the background color transparency of a pop-up message. |
| getPortraitPictureUrl()      | `string`    | Obtains the URL of the portrait image for a pop-up message.    |
| getLandscapePictureUrl()     | `string`    | Obtains the URL of the landscape image for a pop-up message.   |
| getMajorButton()             | `Button`    | Obtains the primary button of a pop-up message.                |
| getMinorButton()             | `Button`    | Obtains the secondary button of a pop-up message.              |

#### Public Methods

##### getTitle()

Obtains the title of a pop-up message.

###### Return Type

| Type     | Description                |
| -------- | -------------------------- |
| `string` | Title of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const title: string = card.getTitle();
      console.log(title);
    }
  );
}
```

##### getTitleColor()

Obtains the title color of a pop-up message.

###### Return Type

| Type     | Description                      |
| -------- | -------------------------------- |
| `string` | Title color of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const titleColor: string = card.getTitleColor();
      console.log(titleColor);
    }
  );
}
```

##### getTitleColorOpenness()

Obtains the title color transparency of a pop-up message.

###### Return Type

| Type     | Description                                   |
| -------- | --------------------------------------------- |
| `number` | Title color transparency of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const titleColorOpenness: number = card.getTitleColorOpenness();
      console.log(titleColorOpenness);
    }
  );
}
```

##### getBody()

Obtains the body of a pop-up message.

###### Return Type

| Type     | Description               |
| -------- | ------------------------- |
| `string` | Body of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const body: string = card.getBody();
      console.log(body);
    }
  );
}
```

##### getBodyColor()

Obtains the body color of a pop-up message.

###### Return Type

| Type     | Description                     |
| -------- | ------------------------------- |
| `string` | Body color of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const bodyColor: string = card.getBodyColor();
      console.log(bodyColor);
    }
  );
}
```

##### getBodyColorOpenness()

Obtains the body color transparency of a pop-up message.

###### Return Type

| Type     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| `number` | Body color transparency of a pop-up message. The value ranges from 0 to 100. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const bodyColorOpenness: number = card.getBodyColorOpenness();
      console.log(bodyColorOpenness);
    }
  );
}
```

##### getBackgroundColor()

Obtains the background color of a pop-up message.

###### Return Type

| Type     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `string` | Background color of a pop-up message, which is an RGB value. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const backgroundColor: string = card.getBackgroundColor();
      console.log(backgroundColor);
    }
  );
}
```

##### getBackgroundColorOpenness()

Obtains the background color transparency of a pop-up message.

###### Return Type

| Type     | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| `number` | Background color transparency of a pop-up message. The value ranges from 0 to 100. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const backgroundColorOpenness: string = card.getBackgroundColorOpenness();
      console.log(backgroundColorOpenness);
    }
  );
}
```

##### getPortraitPictureUrl()

Obtains the URL of the portrait image for a pop-up message.

###### Return Type

| Type     | Description                                     |
| -------- | ----------------------------------------------- |
| `string` | URL of the portrait image for a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const portraitPictureUrl: string = card.getPortraitPictureUrl();
      console.log(portraitPictureUrl);
    }
  );
}
```

##### getLandscapePictureUrl()

Obtains the URL of the landscape image for a pop-up message.

###### Return Type

| Type     | Description                                      |
| -------- | ------------------------------------------------ |
| `string` | URL of the landscape image for a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const landscapePictureUrl: string = card.getLandscapePictureUrl();
      console.log(landscapePictureUrl);
    }
  );
}
```

##### getMajorButton()

Obtains the primary button of a pop-up message.

###### Return Type

| Type     | Description                         |
| -------- | ----------------------------------- |
| `Button` | Primary button of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const majorButton: Button = card.getMajorButton();
      console.log(JSON.stringify(majorButton));
    }
  );
}
```

##### getMinorButton()

Obtains the secondary button of a pop-up message.

###### Return Type

| Type     | Description                           |
| -------- | ------------------------------------- |
| `Button` | Secondary button of a pop-up message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const minorButton: Button = card.getMinorButton();
      console.log(JSON.stringify(minorButton));
    }
  );
}
```

### 3.6. Button

Represents a pop-up message button.

#### Public Method Summary

| Method                 | Return Type | Description                                             |
| ---------------------- | ----------- | ------------------------------------------------------- |
| getText()              | `string`    | Obtains the button name.                                |
| getTextColor()         | `string`    | Obtains the button name text color.                     |
| getTextColorOpenness() | `number`    | Obtains the transparency of the button name text color. |
| getActionUrl()         | `string`    | Obtains the redirection URL of the button.              |

#### Public Methods

##### getText()

Obtains the button name.

###### Return Type

| Type     | Description  |
| -------- | ------------ |
| `string` | Button name. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const minorButton: Button = card.getMinorButton();
      const text: string = minorButton.getText();
      console.log(text);
    }
  );
}
```

##### getTextColor()

Obtains the button name text color.

###### Return Type

| Type     | Description             |
| -------- | ----------------------- |
| `string` | Button name text color. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const minorButton: Button = card.getMinorButton();
      const textColor: string = minorButton.getTextColor();
      console.log(textColor);
    }
  );
}
```

##### getTextColorOpenness()

Obtains the transparency of the button name text color.

###### Return Type

| Type     | Description                                 |
| -------- | ------------------------------------------- |
| `number` | Transparency of the button name text color. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const minorButton: Button = card.getMinorButton();
      const textColorOpenness: string = minorButton.getTextColorOpenness();
      console.log(textColorOpenness);
    }
  );
}
```

##### getActionUrl()

Obtains the redirection URL of the button.

###### Return Type

| Type     | Description                    |
| -------- | ------------------------------ |
| `string` | Redirection URL of the button. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const card: Card = appMessage.getCard();
      const minorButton: Button = card.getMinorButton();
      const actionUrl: string = minorButton.getActionUrl();
      console.log(actionUrl);
    }
  );
}
```

### 3.7. PictureMessage

Represents an image message.

#### Public Method Summary

| Method              | Return Type   | Description                                         |
| ------------------- | ------------- | --------------------------------------------------- |
| getId()             | `string`      | Obtains the ID of an in-app message.                |
| getMessageType()    | `MessageType` | Obtains the message type.                           |
| getStartTime()      | `number`      | Obtains the start timestamp of a message.           |
| getEndTime()        | `number`      | Obtains the end timestamp of a message.             |
| getFrequencyType()  | `number`      | Obtains the display frequency type of a message.    |
| getFrequencyValue() | `number`      | Obtains the display frequency of a message.         |
| getTestFlag()       | `TestFlag`    | Checks whether an in-app message is a test message. |
| getTriggerEvents()  | `string[]`    | Obtain the ID of a trigger event.                   |
| getPicture()        | `Picture`     | Obtains the information of an image message.        |

#### Public Methods

##### getId()

Obtains the ID of an in-app message.

###### Return Type

| Type     | Description |
| -------- | ----------- |
| `string` | Message ID. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const id: string = appMessage.getId();
      console.log(id);
    }
  );
}
```

##### getMessageType()

Obtains the message type.

###### Return Type

| Type          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `MessageType` | Message type. The banner message type is MessageType.PICTURE. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const messageType: MessageType = appMessage.getMessageType();
      console.log(messageType);
    }
  );
}
```

##### getStartTime()

Obtains the start timestamp of a message.

###### Return Type

| Type     | Description                                             |
| -------- | ------------------------------------------------------- |
| `number` | Start timestamp of a message, accurate to milliseconds. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const startTime: number = appMessage.getStartTime();
      console.log(startTime);
    }
  );
}
```

##### getEndTime()

Obtains the end timestamp of a message.

###### Return Type

| Type     | Description                                           |
| -------- | ----------------------------------------------------- |
| `number` | End timestamp of a message, accurate to milliseconds. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const endTime: number = appMessage.getEndTime();
      console.log(endTime);
    }
  );
}
```

##### getFrequencyType()

Obtains the display frequency of a message.

###### Return Type

| Type     | Description                                                                                                                                                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | Display frequency type of a message. The options are as follows: <br/>1: only once.<br/>2: once every X days. The value of X is the return value of getFrequencyValue.<br/>3: X days per day The value of X is the return value of getFrequencyValue. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const frequencyType: number = appMessage.getFrequencyType();
      console.log(frequencyType);
    }
  );
}
```

##### getFrequencyValue()

Obtains the display frequency limit of an in-app message.

###### Return Type

| Type     | Description                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| `number` | Display frequency limit of an in-app message. This parameter is valid only when getFrequencyType is set to 2 or 3. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const frequencyValue: number = appMessage.getFrequencyValue();
      console.log(frequencyValue);
    }
  );
}
```

##### getTestFlag()

Checks whether an in-app message is a test message.

###### Return Type

| Type       | Description                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `TestFlag` | Checks whether an in-app message is a test message. The options are as follows:<br/>1: test message<br/>0: non-test message |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const testFlag: TestFlag = appMessage.getTestFlag();
      console.log(testFlag);
    }
  );
}
```

##### getTriggerEvents()

A collection of in-app message trigger event types, which are selected by you in AppGallery Connect.

###### Return Type

| Type       | Description                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `string[]` | A collection of in-app message trigger event types.The App Messaging SDK matches an event ID with the trigger event types of an in-app message. If the ID is in TriggerEvent, the message will be displayed. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const triggerEvents: string[] = appMessage.getTriggerEvents();
      console.log(triggerEvents);
    }
  );
}
```

##### getPicture()

Obtains the information of an image message.

###### Return Type

| Type      | Description                      |
| --------- | -------------------------------- |
| `Picture` | Information of an image message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const picture: Picture = appMessage.getPicture();
      console.log(JSON.stringify(picture));
    }
  );
}
```

### 3.8. Picture

Represents the information of an image message.

#### Public Method Summary

| Method          | Return Type | Description                                      |
| --------------- | ----------- | ------------------------------------------------ |
| getPictureUrl() | `string`    | Image URL of an image message.                   |
| getActionUrl()  | `string`    | Obtains the redirection URL of an image message. |

#### Public Methods

##### getPictureUrl()

Image URL of an image message.

###### Return Type

| Type     | Description                    |
| -------- | ------------------------------ |
| `string` | Image URL of an image message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const picture: Picture = appMessage.getPicture();
      const pictureUrl: string = picture.getPictureUrl();
      console.log(pictureUrl);
    }
  );
}
```

##### getActionUrl()

Obtains the redirection URL of an image message.

###### Return Type

| Type     | Description                          |
| -------- | ------------------------------------ |
| `string` | Redirection URL of an image message. |

###### Call Example

```ts
async function example() {
  await AGCAppMessaging.addListener(
    Events.ON_MESSAGE_DISPLAY_LISTENER,
    (appMessage) => {
      const picture: Picture = appMessage.getPicture();
      const actionUrl: string = picture.getActionUrl();
      console.log(actionUrl);
    }
  );
}
```
## 3.9. Constants

### Enum MessageType

Obtains the message type.

| Field      | Value | Description     |
| ---------- | ----- | --------------- |
| UN_SUPPORT | 0     | Undefined type. |
| CARD       | 1     | Pop-up message. |
| PICTURE    | 2     | Image message.  |
| BANNER     | 3     | Banner message. |

### Enum Location

Display position of a pop-up or image message.

| Field  | Value | Description |
| ------ | ----- | ----------- |
| BOTTOM | 0     | Bottom.     |
| CENTER | 1     | Center.     |

### Enum TestFlag

TestFlag constants.

| Field            | Value | Description       |
| ---------------- | ----- | ----------------- |
| NON_TEST_MESSAGE | 0     | Non-test message. |
| TEST_MESSAGE     | 1     | Test message.     |

### Enum DismissType

Message closing constants.

| Field                | Value | Description                               |
| -------------------- | ----- | ----------------------------------------- |
| UNKNOWN_DISMISS_TYPE | 0     | Undefined type.                           |
| CLICK                | 1     | Close button or redirection link tapping. |
| CLICK_OUTSIDE        | 2     | Tapping outside the message borders.      |
| BACK_BUTTON          | 3     | Back button tapping.                      |
| AUTO                 | 4     | Auto.                                     |
| SWIPE                | 5     | SWIPE.                                    |

### Enum Events

Events constants for event callbacks.

| Field                       | Value            | Description                        |
| --------------------------- | ---------------- | ---------------------------------- |
| ON_MESSAGE_CLICK_LISTENER   | onMessageClick   | Listens on message tap events.     |
| ON_MESSAGE_DISPLAY_LISTENER | onMessageDisplay | Listens on message display events. |
| ON_MESSAGE_DISMISS_LISTENER | onMessageDismiss | Listens on message closing events. |
| ON_MESSAGE_ERROR_LISTENER   | onMessageError   | Listens on message error events.   |

## 3.10. Data Types

### BaseProperties

Represents common base properties among all message type.

| Field          | Type       | Description                              |
| -------------- | ---------- | ---------------------------------------- |
| id             | `number`   | ID of an in-app message.                 |
| startTime      | `number`   | Start timestamp of a message.            |
| endTime        | `number`   | End timestamp of a message.              |
| frequencyType  | `number`   | Display frequency type of a message.     |
| frequencyValue | `number`   | Display frequency of a message.          |
| testFlag       | `number`   | In-app message is a test message or not. |
| triggerEvents  | `string[]` | IDs of a trigger events.                 |

### BannerMessageProps

Represents the banner message object.

| Field  | Type             | Description             |
| ------ | ---------------- | ----------------------- |
| base   | `BaseProperties` | Base properties object. |
| banner | `BannerProps`    | Banner object.          |

### BannerProps

Represents the information of a banner.

| Field                   | Type     | Description                                        |
| ----------------------- | -------- | -------------------------------------------------- |
| title                   | `string` | Title of a banner message.                         |
| titleColor              | `string` | Title color of a banner message.                   |
| titleColorOpenness      | `number` | Title color transparency of a banner message.      |
| body                    | `string` | Body of a banner message.                          |
| bodyColor               | `string` | Body color of a banner message.                    |
| bodyColorOpenness       | `number` | Body color transparency of a banner message.       |
| backgroundColor         | `string` | Background color of a banner message.              |
| backgroundColorOpenness | `number` | Background color transparency of a banner message. |
| pictureURL              | `string` | Image URL of a banner message.                     |
| actionURL               | `string` | Redirection URL in a banner message.               |

### CardMessageProps

Represents a pop-up message.

| Field | Type             | Description             |
| ----- | ---------------- | ----------------------- |
| base  | `BaseProperties` | Base properties object. |
| card  | `CardProps`      | Card object.            |

### CardProps

Represents the information of a card in a pop-up message.

| Field                   | Type          | Description                                        |
| ----------------------- | ------------- | -------------------------------------------------- |
| title                   | `string`      | Title of a pop-up message.                         |
| titleColor              | `string`      | Title color of a pop-up message.                   |
| titleColorOpenness      | `number`      | Title color transparency of a pop-up message.      |
| body                    | `string`      | Body of a pop-up message.                          |
| bodyColor               | `string`      | Body color of a pop-up message.                    |
| bodyColorOpenness       | `number`      | Body color transparency of a pop-up message.       |
| backgroundColor         | `string`      | Background color of a pop-up message.              |
| backgroundColorOpenness | `number`      | Background color transparency of a pop-up message. |
| portraitPictureURL      | `string`      | URL of the portrait image for a pop-up message.    |
| landscapePictureURL     | `string`      | URL of the landscape image for a pop-up message.   |
| majorButton             | `ButtonProps` | Primary button of a pop-up message.                |
| minorButton             | `ButtonProps` | Secondary button of a pop-up message.              |

### ButtonProps

Represents a pop-up message button.

| Field             | Type     | Description                                 |
| ----------------- | -------- | ------------------------------------------- |
| text              | `string` | Button name.                                |
| textColor         | `string` | Button name text color.                     |
| textColorOpenness | `number` | Transparency of the button name text color. |
| actionURL         | `string` | Redirection URL of the button.              |

### PictureMessageProps

Represents an image message.

| Field   | Type             | Description             |
| ------- | ---------------- | ----------------------- |
| base    | `BaseProperties` | Base properties object. |
| picture | `PictureProps`   | Picture object.         |

### PictureProps

Represents the information of an image message.

| Field      | Type     | Description                          |
| ---------- | -------- | ------------------------------------ |
| pictureURL | `string` | Image URL of an image message.       |
| actionURL  | `string` | Redirection URL of an image message. |

---

## 4. Configuration and Description

### Preparing for Release

Before building the APK, configure obfuscation scripts to prevent the AppGallery Connect SDK from being obfuscated. If obfuscation arises, the AppGallery Connect SDK may not function properly.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default, obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova App Messaging Plugin's ProGuard rules need to be added to your project. These rules are as follows:

```
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.huawei.hianalytics.**{*;}
-keep class com.hianalytics.android.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-keep class com.huawei.agconnect.**{*;}
-keep class com.huawei.agc.**{*;}
-repackageclasses
```

### Accessing Analytics Kit

To use analytics feature, 

- Navigate into your <cordova_project_root_directory>/platforms/android/app/build.gradle and add build dependencies in the dependencies section.

```
dependencies {
   implementation 'com.huawei.hms:hianalytics:5.1.0.301'
}
```
- Navigate into your <cordova_project_root_directory>/platforms/ios file and edit the Podfile file to add the pod dependency 'HiAnalytics'

- Example Podfile file:

```
# Pods for AGCAppLinkingDemo
  pod 'HiAnalytics'
```

- Run pod install to install the pods.

```
$ pod install
```

- Initialize the Analytics SDK using the config API in AppDelegate in iOS platform.

Sample code for initialization in AppDelegate.m:

```
#import "AppDelegate.h"
#import <HiAnalytics/HiAnalytics.h>

@implementation AppDelegate
...
// Customize the service logic after app launch.
- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions {
self.viewController = [[MainViewController alloc] init];
// Initialize the Analytics SDK.
[HiAnalytics config];   
return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
...
@end
```

For further information please refer to [Analytics Kit Service Guide](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/introduction-0000001050745149).

---

## 5. Sample Project

You can find the sample projects on [AppGallery Connect > Examples > AppMessaging > Framework](https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agc-appmessage-introduction) page.

---

## 6. Licensing and Terms

AGC App Messaging Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
