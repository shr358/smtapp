
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';
import {createDefaultChannel, displayNotification} from './src/fcmtoken/notificationHandler';


messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('📦 Background message:', remoteMessage);
  await createDefaultChannel();
  await displayNotification(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
