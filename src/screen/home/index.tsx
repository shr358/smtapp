
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import { RootNavigationprop } from "../../navigation/stack";
import { RootStackParamList } from '../../navigation/types';
import styles from './styles'; 




const Home = ()  =>{
const navigation = useNavigation<RootNavigationprop>()
const route = useRoute<RouteProp<RootStackParamList , 'home'>>()
  const  {email} = route.params;

 
    return ( <View style={styles.container}>
      <Text>Email:{email}</Text> 
     <Text style={styles.title}>My Collection</Text> 
  
     <View style={styles.box}>

   <Text style={styles.message}> 
       you don't have any Collection yet,{'\n'}please{'\n'}scan or tap your Album 
       </Text> 


            
             <TouchableOpacity style={styles.button} onPress={() => console.log('Scan or tap pressed')}>
                <Text style={styles.buttonText}>scan or tap</Text> 
                </TouchableOpacity> 


   <View style = {styles.lineStyle}>

</View>




                <Text style={styles.orText}>or browse{'\n'}our catalog</Text> 
            
             <TouchableOpacity style={styles.button2} onPress={() => console.log('Browse catalog pressed')}> 
                   
                    <Text style={styles.buttonText2}>browse catalog</Text>

                     </TouchableOpacity>
            </View>

     </View> 

                      );
 };
                    
 
 export default Home;

