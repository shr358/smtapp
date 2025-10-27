
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Collect from '../collect/scanScreen';
import Account from '../account/acount';
import Catalog from '../catalog/Catalog';
import Collection from '../collection/collection';


const Tab = createBottomTabNavigator();

const Home = ({ route }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 5,backgroundColor:'black' },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'Collection') {
            iconSource = require('../../assets/images/splash/collectionsIcon.png');
          } else if (route.name === 'Catalog') {
            iconSource = require('../../assets/images/splash/catalogIcon.png');
          } else if (route.name === 'Collect') {
            iconSource = require('../../assets/images/splash/collectIcon.png');
          } else if (route.name === 'Account') {
            iconSource = require('../../assets/images/splash/accountIcon.png');
          }

          return (
              <Image source={iconSource}
              style={{
                width: 24,
  height: 24,
   tintColor: focused ? '#FFFFFF' : 'gray',
 }}
 resizeMode="contain"
 />
);
},
      })}
    >
      <Tab.Screen
        name="Collection"
        component={Collection}
         initialParams={route.params}
      />
      <Tab.Screen name="Catalog" component={Catalog} />
      <Tab.Screen name="Collect" component={Collect} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Home;
