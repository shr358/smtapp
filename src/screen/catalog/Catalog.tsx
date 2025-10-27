
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';


  const Catalog = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetching api product>>>>>>>>......');
       const response = await axios.get('https://fakestoreapi.com/products');
       console.log('fetch product succefully>>>>>>>>>');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    console.log('loading produt>>>>>>>>......');
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }


  const renderItem = ({ item}) => (
    <TouchableOpacity style={styles.card}
      onPress = {()=> navigation.navigate('Catalogdetailscreen',{product: item})}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
   </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}/>
    </View>
  );
};

export default Catalog;
