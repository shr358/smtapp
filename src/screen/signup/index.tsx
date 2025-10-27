
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/userSlice';
import { AppDispatch, RootState } from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);


  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!email.includes('@') || !email.includes('gmail') || !email.includes('.') || !email.includes('com')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters long');
      return;
    }


    const userData = { firstName, lastName, email, password };

    try {

      const usersStr = await AsyncStorage.getItem('userData');
      let users: any[] = usersStr ? JSON.parse(usersStr) : [];

      console.log('Users in AsyncStorage before signup:>>>>>>', users);

      const userExists = users.find(u => u.email === email);

  if (userExists) {
        Alert.alert('Error', 'Email already exists!');
        return;
      }

     users.push(userData);

     await AsyncStorage.setItem('userData', JSON.stringify(users));
     dispatch(registerUser(userData));

      console.log('New user registered:>>>>>', userData);
      console.log('Redux state after registration:>>>>>>>', { ...user, ...userData });
      console.log('Users after signup:>>>>>>>', users);

      Alert.alert('Success', 'Account created successfully!', [

        {
          text: 'OK',
          onPress: () => navigation.reset({ index: 0,
            routes: [{ name: 'SignIn'}],
        }),
        },

      ]);

             } catch (error) {
      console.log('Error saving user data: ', error);
  }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Create an account{'\n'}on <Text style={styles.highlight}>Colleziona.me</Text>
      </Text>

      <View style={styles.inputContainer}>
         <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value={firstName} onChangeText={(text) => setFirstName(text.replace(/\s/g, ''))} />

        <Text style={styles.label}>Last Name</Text>
         <TextInput style={styles.input} value={lastName} onChangeText={(text) => setLastName(text.replace(/\s/g, ''))} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={(text) => setEmail(text.replace(/\s/g, ''))} />

        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordContainer}>

          <TextInput style={styles.passwordInput} secureTextEntry={hidePassword}
          value={password} onChangeText={(text) => setPassword(text.replace(/\s/g, ''))} />

          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Image source={hidePassword ? require('../../assets/images/splash/hidden.png') : require('../../assets/images/splash/visible.png')} style={styles.eyeIcon} resizeMode="contain" />
          </TouchableOpacity>


   </View>

      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signinRow}>

        <Text style={styles.signinText}>Already have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signinLink}>Sign In</Text>

        </TouchableOpacity>

      </View>

    </View>
  );

};

export default SignUp;

