import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import CustomButton from './componets/CustomButton';

//functions
import {btns} from './functions/buttons';
import Calculator from './screens/calculator';
const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
