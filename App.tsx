// import React ,{useEffect}from 'react';

// import {Alert } from 'react-native';
// import '@react-native-firebase/app';
// import messaging from '@react-native-firebase/messaging';
// import { Provider } from 'react-redux';
// import {store} from './src/redux/store';
// import AppNavigator from './src/navigation/stack';
// import FCMToken from './src/fcmtoken/index';

// const App = () => {

//    useEffect(() => {

//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       console.log('📩 Foreground message:', remoteMessage);
//       Alert.alert(
//         remoteMessage.notification?.title || 'Notification',
//         remoteMessage.notification?.body || ''
//       );
//     });


//     const unsubscribeOpened = messaging().onNotificationOpenedApp(remoteMessage => {
//       console.log('📲 Notification opened from background:', remoteMessage.notification);

//     });


//     messaging()
//       .getInitialNotification()
//       .then(remoteMessage => {
//         if (remoteMessage) {
//           console.log('🚀 Notification opened from quit state:', remoteMessage.notification);

//         }
//       });

//     return () => {
//       unsubscribe();
//       unsubscribeOpened();
//     };
//   }, []);
//   return (
//      <Provider store={store}>
//       <FCMToken/>
//       <AppNavigator />
//       </Provider>

//   );
// };

// export default App;

/**
 * App.js
 */
import React, {useEffect} from 'react';
import '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigator from './src/navigation/stack';
import FCMToken from './src/fcmtoken';
import {createDefaultChannel, displayNotification} from './src/fcmtoken/notificationHandler';

const App = () => {
  useEffect(() => {
    // Create channel on startup
    createDefaultChannel();

    // Foreground message
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('📩 Foreground message:', remoteMessage);
      await displayNotification(remoteMessage);
    });

    // When the user taps a notification while the app is in background
    const unsubscribeOpened = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('📲 Notification opened from background:', remoteMessage.notification);
    });

    // When the user taps a notification to open the app from quit state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('🚀 Notification opened from quit state:', remoteMessage.notification);
        }
      });

    return () => {
      unsubscribe();
      unsubscribeOpened();
    };
  }, []);

  return (
    <Provider store={store}>
      <FCMToken />
      <AppNavigator />
    </Provider>
  );
};

export default App;
