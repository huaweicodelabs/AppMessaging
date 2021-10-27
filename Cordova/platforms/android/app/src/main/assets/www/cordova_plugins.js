cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-agc-appmessaging.AGCAppMessaging",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/AGCAppMessaging.js",
      "pluginId": "cordova-plugin-agc-appmessaging",
      "clobbers": [
        "AGCAppMessaging"
      ]
    },
    {
      "id": "cordova-plugin-agc-appmessaging.appMessage",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/appMessage.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "cordova-plugin-agc-appmessaging.bannerMessage",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/bannerMessage.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "cordova-plugin-agc-appmessaging.cardMessage",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/cardMessage.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "cordova-plugin-agc-appmessaging.pictureMessage",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/pictureMessage.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "cordova-plugin-agc-appmessaging.enums",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/enums.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "cordova-plugin-agc-appmessaging.interfaces",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/interfaces.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "cordova-plugin-agc-appmessaging.utils",
      "file": "plugins/cordova-plugin-agc-appmessaging/www/utils.js",
      "pluginId": "cordova-plugin-agc-appmessaging"
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-agc-appmessaging": "1.2.0-beta.1",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-whitelist": "1.3.4"
  };
});