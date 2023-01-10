# AppGallery Connect应用内消息Flutter插件-演示

---

##目录

-【导言】（#1-导言）
-【安装】（#2-安装）
-【配置】（#3配置）
-【许可和条款】（#4-许可和条款）

---

## 1.导言

此演示项目是演示**AppGallery Connect Flutter应用内消息功能的示例
**插件。

---

## 2.安装

在开始之前，您必须在【HUAWEI Developer】网站（https://Developer.huawei.com/consumer/en/） 上注册为华为开发者并完成身份验证。具体操作请参见【注册华为帐号】（https://Developer.huawei.com/consumer/en/doc/10104）。

###在AppGallery Connect中创建项目

需要在AppGallery Connect中创建应用，才能与华为服务通信。要创建应用，请执行以下步骤：

**步骤1。**在位于**示例/android/app/build.gradle**的应用程序级别构建格拉德文件上设置唯一的**应用程序ID*。您还应更改**/example/android/app/src/**目录和**MainActivity.java**中清单文件的**包名称*，以与应用程序ID匹配。
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
**步骤2。**登录【应用市场连接】（https://Developer.huawei.com/consumer/en/service/josp/agc/index.html）， 选择**我的项目**。

**步骤3。**从项目列表中选择您的项目，或通过单击**添加项目**按钮创建新项目。

**步骤4。**进入**项目设置**>*基本信息**，单击**添加应用**。
如果项目中存在应用，需要添加新的应用，请展开页面顶部的应用选择区域，单击**添加应用**。

**步骤5。**在**添加应用程序**页面上，在此处输入您之前定义的**应用程序ID**作为**包名称**，然后填写必要的字段，然后单击**确定*。

###启用应用内消息

在使用应用内消息之前，您需要启用它。如果您已启用，请跳过此步骤。

**步骤1。**在【应用市场连接】（https://Developer.huawei.com/consumer/en/service/josp/agc/index.html） 中，单击*我的项目*。

**步骤2。**从项目列表中找到您的项目，然后在项目卡片上单击需要为其启用应用内消息的应用程序。

**步骤3:**转到**增长>应用程序消息**。

**步骤4:**单击右上角的**立即启用**。

**步骤5:***应用内消息**服务使用HUAWEI Analytics报告应用内消息事件。因此，在集成应用内消息SDK之前，您需要启用HUAWEI Analytics。具体操作请参见【启用华为分析】（https://开发人员.huawei.com/consumer/en/doc/开发/HMSCore-Guides/service-enBall-0000001050745155）。

有关更多详细信息，请参见【启用应用内消息】（https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agc-appmessage-getstarted#h1-1606373400682） 。

###构建并运行项目

**步骤1:**执行以下命令，更新软件包信息。
```
[project_path]> flutter pub get
``` 
**步骤2:**运行以下命令，启动演示应用程序。
```
[project_path]> flutter run
```
---

##3、配置

###监听AppMessaging事件

添加监听器，获取应用内消息点击事件。

#####调用示例

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


###添加自定义视图

应用内消息支持三种消息类型，即弹出消息、图像消息和横幅消息。App Messaging SDK为每种类型提供了默认布局。您可以定制更适合您的应用的消息展示风格，为用户提供个性化体验。

首先，添加监听器，获取应用内消息。然后，您可以为应用程序消息创建自己的布局。

```dart
    _streamSubscription1 = agconnectAppmessaging.customEvent.listen((event) {
      _showDialog(context ,event.toString());
    });
```

以下行应添加到相应的平台中。

IOS：

将AppDelegate中的以下代码添加到项目中：

在React-Native/iOS项目info.plist文件中设置AGCCustomView字段。

true：添加自定义视图
false：删除自定义视图

<dict>
 ...
 <key>AGCCustomView</key>
 <false/>
 ...
</dict>

Android:<br>
您应该将下面的代码添加到MainActivity.java的onCreate方法中。

```java
AGCAppMessagingCustomEventStreamHandler.addCustomView();
```

###访问分析服务

要使用分析功能，

-导航到/android/app/build.gradle，并在依赖项部分添加构建依赖项。
   
    ```
    dependencies {
        implementation 'com.huawei.hms:hianalytics:5.1.0.301'
    }
    ```
-导航到/ios文件并编辑Podfile文件以添加Pod依赖项“HiAnalytics”
    
-Podfile文件示例：

        ```
        # Pods for AGCAppMessagingDemo
        pod 'HiAnalytics'
        ```
    
-运行pod install以安装Pod。
    
       ```
       $ pod install
       ```
    
-使用iOS平台AppDelegate中的配置API初始化Analytics SDK。

AppDelegate中初始化的示例代码：
    
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
    
有关更多信息，请参见【分析服务指南】（https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/introation-0000001050745149） 。

---

## 4.许可和条款

AppGallery Connect应用内消息Flutter插件演示在【Apache 2.0许可证】（./LICense）下获得许可
