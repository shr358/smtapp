

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const ChangePassword = () => {
  const dispatch = useDispatch();

  // const user = useSelector(state => state.user);
  const user = useSelector((state: any) => state.user);


  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = async () => {

    console.log('update password...>>>>>');
    console.log('New Password:>>>>>>', newPassword);
    console.log('Confirm Password:>>>>>', confirmPassword);

    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Please fill all fields');
      return;
    }

    if (currentPassword !== user.activeUser.password) {
      Alert.alert('Current password is wrong');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Passwords do not match');
       console.log('Current password mismatch>>>>>>');
      return;
    }

    dispatch(updatePassword({ email: user.activeUser.email, newPassword }));

    const updatedUser = { ...user.activeUser, password: newPassword };
    await AsyncStorage.setItem('activeUser', JSON.stringify(updatedUser));

console.log('AsyncStorage activeUser updated:>>>>>>', updatedUser);

    const usersStr = await AsyncStorage.getItem('userData');
    let users = usersStr ? JSON.parse(usersStr) : [];

    // const index = users.findIndex(u => u.email === updatedUser.email);
      const index = users.findIndex((u: { email: string; password: string }) => u.email === updatedUser.email);
    if (index !== -1) {
      users[index] = updatedUser;
      await AsyncStorage.setItem('userData', JSON.stringify(users));
    }

    Alert.alert('Password updated!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
