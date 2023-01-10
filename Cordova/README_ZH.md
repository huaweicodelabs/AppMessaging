# AGC应用内消息Cordova演示

##目录

- [1.导言]（#1-导言）
- [2.安装指南]（#2-安装指南）
- [2.1.在AppGallery Connect中创建项目]（#21-在AppGallery Connect中创建项目）
- [2.2.获取agconnect-services.json和agconnect-services.plist]（#22-获取agconnect-services.json和agconnect-services.plist）
- [2.3.Cordova]（#23-Cordova）
- [2.3.1. iOS应用开发]（#231-iOS应用开发）
- [2.3.2. Android应用开发]（#232-Android应用开发）
- [3.配置和说明]（#3-配置和说明）
- [4.许可和条款]（#5-许可和条款）

---

## 1.导言

此演示应用程序演示了AGC应用内消息Cordova插件的使用。

---

## 2.安装指南

在开始之前，您必须在【HUAWEI Developer】网站（https://Developer.huawei.com/consumer/en/） 上注册为HUAWEI Developer并完成身份验证。具体操作请参见【注册华为帐号】（https://Developer.huawei.com/consumer/en/doc/10104）。

### 2.1.在AppGallery Connect中创建项目

需要在AppGallery Connect中创建应用，才能与华为服务通信。要创建应用，请执行以下步骤：

1、登录【AppGallery Connect】（https://Developer.huawei.com/consumer/en/service/josp/agc/index.html）， 选择**我的项目**。
2.从项目列表中选择您的项目，或通过单击***添加项目**按钮创建新项目。
3.进入**项目设置**，单击**添加应用**。
如果项目中存在应用，需要添加新的应用，请展开页面顶部的应用选择区域，单击**添加应用**。
4、在**添加应用**页面，输入应用信息，单击**确定**。

### 2.2.获取agconnect-services.json和agconnect-services.plist

1、登录【AppGallery Connect】（https://Developer.huawei.com/consumer/en/service/josp/agc/index.html）， 从**我的项目**中选择您的项目。然后转到**项目设置**>。在**应用信息**字段中，

-如果平台是Android，请单击**agconnect-services.json**按钮下载配置文件。
-如果平台是iOS，请单击**agconnect-services.plist**按钮下载配置文件。

2.3.Cordova

1.安装Cordova CLI。

   ```bash
   npm install -g cordova
   ```

2.在Ionic项目config.xml中设置首选项。
   ```xml
  <!--<platform name="ios">-->
    <preference name="deployment-target" value="11.0" />
    <preference name="SwiftVersion" value="5" />
   ```

3.更新在**`config.xml`**文件中指定的小部件**`id`**属性。它必须与**`agconnect-services.json`**和**`agconnect-services.plist`**文件的**客户端> package_name**值相同。

4.如果以前没有这样做，请将**Android**或*iOS**平台添加到项目中。

   ```bash
   cordova platform add android
   ```

   ```bash
   cordova platform add ios
   ```

5.将`AGC应用内消息'安装到项目中。

-在项目的根目录下运行以下命令，通过**npm**安装它。

       ```bash
       cordova plugin add @cordova-plugin-agconnect/appmessaging
       ```

#### 2.3.1. iOS应用开发

1.将**`agconnect-services.plist`**文件添加到Xcode项目的应用程序根目录中。

2.检查Xcode项目的签名和功能选项卡页。

3.运行应用程序。

    ```bash
    cordova run ios --device
    ```

#### 2.3.2. Android应用开发

1.将**`agconnect-services.json`**文件复制到**`<project_root>/platforms/android/app`** 目录下。

2.运行应用程序。

   ```bash
   cordova run android --device
   ```
   
---

## 3.配置和说明

###添加自定义视图
应用消息支持三种消息类型，即弹出消息、图像消息和横幅消息。App Messaging SDK为每种类型提供了默认布局。您可以定制更适合您的应用的消息展示风格，为用户提供个性化体验。

首先，添加监听器，获取应用消息。然后，您可以为应用程序消息创建自己的布局。
```js
AGCAppMessaging.addListener(Events.CUSTOM_VIEW, (appMessage) => {
    //Create your app message layout and display the message.
    alert(JSON.stringify(appMessage));
});
```
以下行应添加到相应的平台中。

IOS：

在cordova项目中设置首选项**config.xml**。
  - true: adding custom view
  - flase: removing custom view
   ```xml
  <!--<platform name="ios">-->
  <edit-config file="*-Info.plist" mode="overwrite" target="AGCCustomView">
	<true/>
  </edit-config>
   ```

Android：

您应该将下面的代码添加到MainActivity.java的onCreate方法中。

```java
AGCAppMessaging.addCustomView(cordovaInterface);
```

###屏幕方向
默认情况下，由于应用程序消息传递SDK，横向消息布局将不起作用。要使其工作，您必须从AndroidManifest.xml文件中活动标记的“android:configChanges”属性中删除“orientation”关键字。

---

## 4.许可和条款

AGC应用程序消息cordova插件在【Apache 2.0许可证】（许可证）下获得许可。
