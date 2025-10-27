import React from 'react';
import { createNativeStackNavigator , NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import Splash from '../../screen/splash';
import SignIn from '../../screen/signin';
import SignUp from '../../screen/signup';
import forgot from '../../screen/forgot';
import CatalogdetailScreen from '../../screen/catalogdetailScreen';

import ScannerScreen from '../../screen/collect/scanScreen';
import Account from '../../screen/account/acount';
import changepassword from '../../screen/changepassword/changepassword';

import home from '../../screen/home';
// import { SafeAreaView } from 'react-native-safe-area-context';
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
         <Stack.Screen name="Catalogdetailscreen" component={CatalogdetailScreen}/>
         {/* <Stack.Screen name="scanScreen" component={ScanScreen} /> */}
         <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
         <Stack.Screen name="Account" component={Account} />
         <Stack.Screen name="changepassword" component={changepassword}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default AppNavigator;
