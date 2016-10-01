# AwesomeReactNativeApp
This project aims to be a good initial react native app with notification, navigation, ads and analytics configured.

## Urban Airship (UA)

Step by step Android configuration:
* create new app at https://go.urbanairship.com/apps/new/
* follow http://docs.urbanairship.com/reference/push-providers/gcm.html to initial config
* add android app in your firebase (https://console.firebase.google.com/) project and copy google-services.json em * * ./android/app/google-services.json
* download airshipconfig.properties from android quickstart_guide of your app at https://go.urbanairship.com/apps/ and move to android/app/src/main/assets/airshipconfig.properties
* add gcmSender = <your sender id> to airshipconfig.properties
* add transport = gcm to airshipconfig.properties
* sync gradle (on Android studio you just click a link or cd android && ./gradlew build on command line)

Things this project has, that a empty react native app doesn't, so it can run UA:

* add compile 'com.google.android.gms:play-services-gcm:9.4.0' to dependencies of app/build.gradle
* add compile 'com.google.android.gms:play-services-location:9.4.0' to dependencies of app/build.gradle
* add apply plugin: 'com.google.gms.google-services' on bottom of app/build.gradle
* add classpath 'com.google.gms:google-services:3.0.0' on buildscript.dependencies of build.gradle

## Javascript, iOS and Android dependencies setup

* npm install
* react-native link (native dependencies setup)

## React Native run

To run this example from Android:

* make sure ANDROID_HOME is set (with android studio installed, the path normally is ~//Library/Android/sdk)
* you can run with Android Studio: npm start on command line to start react-native packager and press the IDE's normal run button.
* Or you can run from command line with: react-native run-android

## License

[MIT License](https://github.com/guilhermebruzzi/AwesomeReactNativeApp/blob/master/LICENSE)
