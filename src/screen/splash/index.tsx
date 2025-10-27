
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

type SplashNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const Splash = () => {
  const navigation = useNavigation<SplashNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashBox}>
      <View style={styles.rowBox}>
         <View style={styles.logoContainer}>

          <Image
            source={require('../../assets/images/splash/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

        </View>

        <View style={styles.nameContainer}>
          <Image
            source={require('../../assets/images/splash/Frame1.png')}
            style={styles.collezionaImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.footerText}>
        <Text style={styles.subtitle}>
          DISCOVER.{'\n'}COLLECT.{'\n'}LISTEN.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('SignIn')}
        >
          <Text style={styles.buttonText}>Start collecting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
