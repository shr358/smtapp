
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image, Alert,
  ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback,ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState, AppDispatch } from '../../redux/store';
import styles from './styles';
import { RootStackParamList } from '../../navigation/types/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation<SignInScreenNavigationProp>();

    const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const checkLogin = async () => {

      try {
        const activeUserStr = await AsyncStorage.getItem('activeUser');

        if (activeUserStr) {
          const activeUser = JSON.parse(activeUserStr);

       console.log(' loaded from AsyncStorage:>>>>>>>', activeUser);

          dispatch(loadUser(activeUser));

          console.log('Redux state after loading:>>>>>>>', { ...user, ...activeUser });

     navigation.reset({
            index: 0,
            routes: [{ name: 'home', params: { email: activeUser.email } }],
          });

        }else{
          setLoading(false);
        }

      } catch (error) {
        console.log('Error checking login:', error);
      }

    };

    checkLogin();
  }, [dispatch, navigation , user]);

  const handleSignIn = async () => {

    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
 }

    try {
      const usersStr = await AsyncStorage.getItem('userData');
      const users = usersStr ? JSON.parse(usersStr) : [];

      console.log('All users from AsyncStorage:>>>>>>>>', users);

      // const matchedUser = users.find(u => u.email === email && u.password === password);
      const matchedUser = users.find((u: { email: string; password: string }) =>
  u.email === email && u.password === password
);


      if (matchedUser) {

     await AsyncStorage.setItem('activeUser', JSON.stringify(matchedUser));
     dispatch(loadUser(matchedUser));

     console.log('User logged in Redux state:>>>>>>', { ...user, ...matchedUser });
        console.log('User saved:>>>>>', matchedUser);

        Alert.alert('Success', 'Logged in successfully!');

        navigation.reset({
          index: 0,
          routes: [{ name: 'home', params: { email } }],
        });

      } else {
        Alert.alert('Please check your email and password incorrect');
      }

    } catch (error) {
       console.log('Error logging in:', error);
    }

  };

    if (loading) {
    return (

     <View style={{  }}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={{ }}>Loading...</Text>
      </View>

    );

  }


  return (

    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }} keyboardShouldPersistTaps="handled">

          <View style={styles.headerBox}>

         <Image source={require('../../assets/images/splash/logoblack2.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.subtitle}>DISCOVER.{'\n'}COLLECT.{'\n'}LISTEN.</Text>

          </View>

          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
       <Text style={styles.signupText}>Sign Up</Text>
       </TouchableOpacity>

          <View style={styles.form}>
     <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text.replace(/\s/g, ''))} keyboardType="email-address" autoCapitalize="none" />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>

              <TextInput style={[styles.input, { flex: 1 }]} value={password} onChangeText={(text) => setPassword(text.replace(/\s/g, ''))} secureTextEntry={hidePassword} />

              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Image source={hidePassword ? require('../../assets/images/splash/hidden.png') : require('../../assets/images/splash/visible.png')} style={styles.eyeIcon} resizeMode="contain" />
              </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.signinButton} onPress={handleSignIn}>
              <Text style={styles.signinText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

    </View>
   </ScrollView>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>


);

};

export default SignIn;
