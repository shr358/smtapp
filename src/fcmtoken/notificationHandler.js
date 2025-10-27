
import notifee, {AndroidImportance} from '@notifee/react-native';

export async function createDefaultChannel() {
  await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });
}

export async function displayNotification(remoteMessage) {
  const {title, body} = remoteMessage.notification || {};

  await notifee.displayNotification({
    title: title || 'New Notification',
    body: body || '',
    android: {
      channelId: 'default',
      smallIcon: 'ic_launcher',
      pressAction: {id: 'default'},
    },
  });
}
