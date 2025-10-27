
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
// import { FONT } from '../../assets/constant/fonts/index';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Collection = ({ route }: any) => {

  const navigation = useNavigation();
  const { email } = route.params || {};

  return (
    <View style={styles.container}>

      {email && (
        <View style={styles.emailHeader}>
          {/* <Text style={styles.emailText}>Email: {email}</Text> */}
        </View>
      )}

      <Text style={styles.title}>My Collection</Text>

      <View style={styles.box}>
        <Text style={styles.message}>
          You don't have any Collection yet,{'\n'}please{'\n'}scan or tap your Album
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ScannerScreen')}
        >
          <Text style={styles.buttonText}>scan or tap</Text>
        </TouchableOpacity>


        <View style={styles.lineStyle} />

        <Text style={styles.orText}>or browse{'\n'}our catalog</Text>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => console.log('Browse catalog pressed')}
        >
          <Text style={styles.buttonText2}>browse catalog</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Collection;
