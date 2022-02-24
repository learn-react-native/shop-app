import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const UIButton = props => {
  return (
    <View style={{ backgroundColor: props.bgColor, ...styles.button, ...props.style }}>
      <Button
        color={props.color}
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
  }
});

export default UIButton;
