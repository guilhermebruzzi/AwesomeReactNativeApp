// @flow
/* global alert:true */
import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import ReactNativeUA from 'react-native-ua'; // import module

export default class AwesomeReactNativeApp extends Component {
  constructor(props: Object) {
    super(props);

    ReactNativeUA.enable_notification(); // prompt user to enable notification

    ReactNativeUA.enable_geolocation(); // prompt user to enable geolocation

    ReactNativeUA.enable_action_url(); // enable url action

     // handle notifications when app is in background
    ReactNativeUA.handle_background_notification();
  }

  componentWillMount() {
    // add handler to handle all incoming notifications
    ReactNativeUA.on_notification((notification: Object) => {
      console.log(  // eslint-disable-line no-console
        'notification:',
        notification.url, // if action url is disabled
        notification.platform,
        notification.event,
        notification.alert,
        notification.data
      );

      alert(notification.alert);
    });
  }

  render(): ReactElement<*> {
    return (
      <View>
        <Text>ReactNativeUA</Text>
      </View>
    );
  }
}
