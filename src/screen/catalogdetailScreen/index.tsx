
import React from 'react';
import {Text, Image, ScrollView, StyleSheet} from 'react-native';


const CatalogDetailScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>
        Rating: ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
      </Text>
      <Text style={styles.id}>Product ID: {product.id}</Text>
    </ScrollView>

  );
};

export default CatalogDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    marginTop:50,
    marginLeft:10,
    marginRight:10,
  },
   loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'blank',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    color: '#556',
  },
  id: {
    marginTop: 10,
    fontSize: 14,
    color: 'blank',
  },

});
