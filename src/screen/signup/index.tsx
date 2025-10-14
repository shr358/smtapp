import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


const SignUp = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword,setHidePassword] = useState(true)

  const handleSignUp = () => {
    console.log('Sign Up Pressed');
   
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>
        
      {/* <Text style={styles.title}></Text> */}
        Create an account{'\n'}on <Text style={styles.highlight}>Colleziona.me</Text>
      </Text>

    
      <View style={styles.inputContainer}>
        <Text style={styles.label}>first name</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={firstName}
          onChangeText={(text) =>setFirstName (text.replace(/\s/g,''))}
        />

        <Text style={styles.label}>last name</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={lastName}
          onChangeText={(text) =>setLastName (text.replace(/\s/g, ''))
}
        />

        <Text style={styles.label}>email address</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) =>setEmail (text.replace(/\s/g,''))}
        />

        <Text style={styles.label}>password</Text>
           <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry = {hidePassword}
          value={password}
          onChangeText={(text) =>setPassword (text.replace(/\s/g,''))} 
          
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
      </View>

   
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      
      <View style={styles.signinRow}>
        <Text style={styles.signinText}>already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signinLink}>sign in</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.termsContainer}>
        <View style={styles.line} />
        <Text style={styles.termsText}>terms, privacy, cookies</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.termsDesc}>
        By signing up, you agree to the Terms of Service and{'\n'}
        Privacy Policy, including the Use of Cookies.
      </Text>
    </View>
  );
};

export default SignUp;
