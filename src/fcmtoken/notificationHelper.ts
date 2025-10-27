
import messaging from '@react-native-firebase/messaging';
import {Platform, PermissionsAndroid} from 'react-native';

export const requestNotificationPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      console.log(enabled ? '✅ iOS permission granted' : '❌ iOS permission denied');
    } else if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        console.log(
          granted === PermissionsAndroid.RESULTS.GRANTED
            ? '✅ Android permission granted'
            : '❌ Android permission denied',
        );
      } else {
        console.log('ℹ️ Android < 13, permission not required');
      }
    }
  } catch (err) {
    console.warn('⚠️ Error requesting permission:', err);
  }
};
