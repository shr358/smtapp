import React from 'react';
import { createNativeStackNavigator , NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
  
import { RootStackParamList } from '../types';
import Splash from '../../screen/splash';
import SignIn from '../../screen/signin';
import SignUp from '../../screen/signup';
import forgot from '../../screen/forgot';

import home from '../../screen/home';
import { SafeAreaView } from 'react-native-safe-area-context';


export type RootNavigationprop = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator();



const AppNavigator = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="forgot" component={forgot} />
          <Stack.Screen name="home" component={home} />
        
         
      </Stack.Navigator>
    </NavigationContainer>


  );
  
};

export default AppNavigator;
