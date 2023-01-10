# React-Native AGC应用内消息-演示

---

##目录

-【导言】（#1-导言）
-【安装】（#2-安装）
-【配置】（#3配置）
-【许可和条款】（#4-许可和条款）

---

## 1.导言

此演示项目是演示**AGC React-Native AppMessaging Kit*插件功能的示例。


---

## 2.安装

在开始之前，您必须注册为华为开发者，并在【华为开发者联盟】网站（https://developer.huawei.com/consumer/en/） 上完成身份验证。具体操作请参见【注册华为帐号】（ https://developer.huawei.com/consumer/en/doc/10104 ）。

###在AppGallery Connect中创建项目

需要在AppGallery Connect中创建应用，才能与华为服务通信。要创建应用，请执行以下步骤：

**步骤1。**登录【AppGallery Connect】（https://developer.huawei.com/consumer/en/service/josp/agc/index.html ），选择**我的项目**。

**步骤2。**从项目列表中选择您的项目，或通过单击**添加项目**按钮创建新项目。

**步骤3。**进入**项目设置**>*基本信息**，单击**添加应用**。
如果项目中存在应用，需要添加新的应用，请展开页面顶部的应用选择区域，单击**添加应用**。

**步骤4。**在**添加应用**页面，输入应用信息，单击**确定**。

###启用应用内消息

在使用应用内消息之前，您需要启用它。如果您已启用，请跳过此步骤。

**步骤1。**在【AppGallery Connect】（https://developer.huawei.com/consumer/en/service/josp/agc/index.html） 中，单击*我的项目*。

**步骤2。**从项目列表中找到您的项目，然后在项目卡片上单击需要为其启用应用内消息的应用程序。

**步骤3:**转到**增长>应用内消息**。

**步骤4:**单击右上角的**立即启用**。

**步骤5:***应用内消息**服务使用华为分析报告应用内消息事件。因此，在集成应用内消息SDK之前，您需要启用HUAWEI Analytics。具体操作请参见【启用华为分析】（https://开发人员.huawei.com/consumer/en/doc/开发/HMSCore-Guides/service-enBun-0000001050745155）。

有关更多详细信息，请参见【启用应用内消息】（https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agc-appmessage-getstarted#h1-1606373400682 ）。

###集成React-Native AppMessaging插件

在使用**@React-native-agconnect/appmessaging**之前，请确保ReactNative开发环境已安装。

###通过NPM安装

```
npm i @react-native-agconnect/appmessaging
```

#### Android应用开发

####将React-Native AGC AppMessaging集成到Android Studio中

-将应用程序的AppGallery Connect配置文件添加到Android Studio项目中。

**步骤1:**登录【AppGallery Connect】（https://developer.huawei.com/consumer/en/service/josp/agc/index.html ），单击**我的项目**。
    
**步骤2:**找到您的**应用程序**项目，然后单击应用程序。
    
**步骤3:**进入**项目设置>应用信息**。在**应用信息**区域，下载**agconnect-services.json**文件。
    
**步骤4:**将**agconnect-services.json**文件复制到项目的应用程序根目录。
    
-打开React Native项目的**android/app**目录中的**build.gradle**文件。

在**defaultConfig** > **applicationId**中设置包名，并将**minSdkVersion**设置为**19**或**更高**。

    ```groovy
    defaultConfig {
     applicationId "<package_name>"
     minSdkVersion 19
     /*
      * <Other configurations>
      */
    }
    ```
    
**包名称必须与_agconnect-services.json_文件中的包名条目匹配。**

- Configure the signature file.
    
    ```gradle
    android {
        /*
         * <Other configurations>
         */

        signingConfigs {
            config {
                storeFile file('<keystore_file>.jks')
                storePassword '<keystore_password>'
                keyAlias '<key_alias>'
                keyPassword '<key_password>'
            }
        }

        buildTypes {
            debug {
                signingConfig signingConfigs.config
            }
            release {
                signingConfig signingConfigs.config
            }
        }
    }
    ```
```

#### iOS应用开发

####将React-Native AGC AppMessaging集成到Xcode项目中

-导航到项目目录，并在命令下面运行。

    ```
    [project_path]> cd ios/ && pod instal
    ```
	
	
-将应用程序的AppGallery Connect配置文件添加到Xcode项目中。

**步骤1:**登录【AppGallery Connect】（https://developer.huawei.com/consumer/en/service/josp/agc/index.html ），单击**我的项目**。
    
**步骤2:**找到您的**应用程序**项目，然后单击应用程序。
    
**步骤3:**进入**项目设置>应用信息**。在**应用信息**区域，下载**agconnect-services.plist**文件。
    
**步骤4:**将**agconnect-services.plist**文件复制到Xcode项目的应用程序根目录。
    
在获取**agconnect-services.plist**文件之前，请确保已启用HUAWEI AppMessaging。有关详细信息，请参阅【启用应用内消息】（#启用启用应用内消息）。
    
如果您在项目设置页面上进行了任何更改，如设置数据存储位置、启用或管理API，则需要下载最新的**agconnect-services.plist**文件，并替换应用程序根目录中的现有文件。
 
---


###构建并运行项目

###安卓

执行以下命令，启动demo应用。
```
[project_path]> npm run android
```

###iOS

执行以下命令，启动demo应用。
```
[project_path]> npm run ios
```

---

##3、配置

【开启应用内消息】（https://developer.huawei.com/consumer/en/doc/development/AppGallery-connect-Guides/agc-appmessage-getstarted#h1-1606373400682 ）

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
        # Pods for AGCAppLinkingDemo
        pod 'HiAnalytics'
        ```
    
-运行pod install以安装Pod。
    
       ```
       $ pod install
       ```
    
-使用iOS平台AppDelegate中的配置API初始化Analytics SDK。

AppDelegate.m中初始化的示例代码：
    
        ```
        #import "AppDelegate.h"
        #import <HiAnalytics/HiAnalytics.h>
 
        @interface AppDelegate ()
 
        @end
 
        @implementation AppDelegate
        ...
        // Customize the service logic after app launch.
        - (BOOL)Application:(UIApplication *)Application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
        // Initialize the Analytics SDK.
        [HiAnalytics config];   
         return YES;
        }
        ...
        @end
        ```
    
有关更多信息，请参见【分析服务指南】（https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/introduction-0000001050745149 ）。
    

---

## 4.许可和条款

AGC React-Native AppMessaging -演示在【Apache 2.0许可证】（许可证）下获得许可

