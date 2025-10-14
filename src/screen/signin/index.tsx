

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
// import strings from '../../utils/lang';

type SignInNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
  const navigation = useNavigation<SignInNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleSignIn = () => {
  
    if (!email || !password) {
      Alert.alert('Error', 'please enter email and password');
      //  Alert.alert('Error', 'good morning');
      return;
    }
     
   
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

   
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters long');
      return;
    }

    navigation.navigate('home', { email });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}
          keyboardShouldPersistTaps="handled"
        >
        
          <View style={styles.headerBox}>
            <Image
              source={require('../../assets/images/splash/logoblack 2.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.subtitle}>DISCOVER.{'\n'}COLLECT.{'\n'}LISTEN.</Text>
          </View>

     
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>

     
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text.replace(/\s/g, ''))}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, { flex: 1}]}
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => setPassword(text.replace(/\s/g, ''))}
                secureTextEntry={hidePassword}
              />

              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <Image
                  source={
                    hidePassword
                      ? require('../../assets/images/splash/hidden.png')
                      : require('../../assets/images/splash/visible.png')
                  }
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

           
            <TouchableOpacity style={styles.signinButton} onPress={handleSignIn}>
              <Text style={styles.signinText}>Sign in</Text>
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
