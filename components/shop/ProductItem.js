import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Card from '../UI/Card';

const ProductItem = props => {
  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onSelect} useForeground>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <View style={styles.detail}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price}</Text>
          </View>
          <View style={styles.actions}>
            {props.children}
          </View>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 2
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
});

export default ProductItem;