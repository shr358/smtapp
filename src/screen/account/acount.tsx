
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/userSlice';
import styles from './styles';
import { RootState, AppDispatch } from '../../redux/store';
// import { RootStackParamList } from '../../navigation/types/index';

const Account = () => {
  const navigation = useNavigation();
// const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const [firstname, setFirstName] = useState('');
  const[lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const[isEditing, setIsEditing] = useState(false);

  useEffect(() => {

    const loadUserData = async () => {

      try {
        const activeUserStr = await AsyncStorage.getItem('activeUser');
        console.log('Active user from AsyncStorage:>>>>>>', activeUserStr);

        if (activeUserStr) {
          const activeUser = JSON.parse(activeUserStr);

          setEmail(activeUser.email || '');
          setFirstName(activeUser.firstName || '');
          setLastName(activeUser.lastName || '');
          console.log('Redux state on load:>>>>>>', user);

        }

      } catch (error) {
        console.log('Error loading user data:', error);
   }

    };
    loadUserData();

  }, [user]);


  const handleLogout = async () => {

    try {

      await AsyncStorage.removeItem('activeUser');
      dispatch(logoutUser());

      console.log('User logged out, Redux state after logout:>>>>>>>', user);
      Alert.alert('Logged out', 'You have been logged out successfully.');

      navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
    } catch (error) {

      console.log('Error logging out:', error);
    }

  };

  const handleUpdateProfile = async () => {

    if (isEditing) {

      try {

     const updatedUser = { email, firstName: firstname, lastName: lastname, password: user.activeUser?.password || '' };
     const usersStr = await AsyncStorage.getItem('userData');

     let users = usersStr ? JSON.parse(usersStr) : [];
      console.log('Users in AsyncStorage before update:>>>>>>', users);

         // const index = users.findIndex(u => u.email === email);
           const index = users.findIndex((u: { email: string; password: string }) => u.email === updatedUser.email);

        if (index !== -1) {
          users[index] = updatedUser;

          await AsyncStorage.setItem('userData', JSON.stringify(users));
          await AsyncStorage.setItem('activeUser', JSON.stringify(updatedUser));

          console.log('Users in AsyncStorage after update:>>>>>>', users);
          console.log('Updated user:>>>>>>', updatedUser);

          Alert.alert('Profile Updated', 'Your profile has been updated successfully.');
        }

      } catch (error) {
        console.log('Error saving profile:', error);
      }

      setIsEditing(false);
 } else {
      setIsEditing(true);
    }

  };

  return (

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/splash/profile.png')} style={styles.profileIcon} />

        <View>
          <Text style={styles.profileTitle}>My Profile</Text>
          <Text style={styles.profileSubtitle}>

            [{firstname} {lastname}]

    </Text>
    </View>
      </View>

      <Text style={styles.label}>Email Address</Text>
      <TextInput style={[styles.input, { backgroundColor: '#f2f2f2', color: '#555' }]} value={email} editable={false} />

      <Text style={styles.label}>First Name</Text>
      <TextInput style={styles.input} value={firstname}
      editable={isEditing} onChangeText={(text) => setFirstName(text.replace(/\s/g, ''))} />

      <Text style={styles.label}>Last Name</Text>
       <TextInput style={styles.input} value={lastname}
       editable={isEditing} onChangeText={(text) => setLastName(text.replace(/\s/g, ''))} />

      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
         <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('changepassword')}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

    </ScrollView>
  );

};

export default Account;
