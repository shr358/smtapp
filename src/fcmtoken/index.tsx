
// import {  View } from 'react-native';
// import React,{useEffect} from 'react';
// import messaging from '@react-native-firebase/messaging';
// import { useDispatch } from 'react-redux';
// import { setfcmtoken } from '../redux/userSlice';
// import { requestNotificationPermission } from '../fcmtoken/notificationHelper';

// const FCMToken =  () => {
//   const dispatch = useDispatch();

//   useEffect(()=>{
//         const getFCMToken = async()=>{

//   try{
//     await requestNotificationPermission();
// const token = await messaging().getToken();
// console.log('fcm token:',token);

// if (token) {
//      dispatch(setfcmtoken(token));
// }
//   } catch (error) {
//     console.log('Error in fetching fcm token:',error);
//   }

// };

// getFCMToken();

//     },[dispatch]);

//   return (

//     <View>
//       {/* <Text>FCM Token</Text> */}

//     </View>
//   );
// };

// export default FCMToken;

/**
 * src/fcmtoken/index.js
 */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {setfcmtoken} from '../redux/userSlice';
import {requestNotificationPermission} from './notificationHelper';

const FCMToken = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getFCMToken = async () => {
      try {
        await requestNotificationPermission();
        const token = await messaging().getToken();
        console.log('🔥 FCM Token:', token);
        if (token) {
          dispatch(setfcmtoken(token));
        }
      } catch (error) {
        console.log('❌ Error fetching FCM token:', error);
      }
    };

    getFCMToken();
  }, [dispatch]);

  return (
    <View>
      <Text>FCM Token Component Loaded</Text>
    </View>
  );
};

export default FCMToken;
