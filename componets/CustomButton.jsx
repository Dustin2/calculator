import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomButton = ({tittle}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{tittle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '25%',
    alignItems: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default CustomButton;
