
import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,
  Platform,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const forgot = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Please enter your email address');
      return;
    }
    Alert.alert('Password reset link sent to:', email);
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>



          <Text style={styles.title}>Recover your{'\n'}password</Text>

          <View style={styles.form}>
      <Text style={styles.label}>email address</Text>

            <TextInput
              style={styles.input} placeholder="" value={email}
              onChangeText={(text)=>setEmail(text.replace(/\s/g,''))} keyboardType="email-address"
              autoCapitalize="none" />

   <TouchableOpacity style={styles.button} onPress={handleSubmit}>
   <Text style={styles.buttonText}>Submit</Text>
   </TouchableOpacity>

          </View>

 <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.footerText}>
             already have an account ? <Text style={styles.signInText}> sign in</Text>
           </Text>

       </TouchableOpacity>

   </View>

      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  );

};

export default forgot;
