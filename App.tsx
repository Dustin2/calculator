import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Appearance,
} from 'react-native';
import {ThemeContex} from './scr/context/ThemeContext';
// import Button from './scr/components/Button';
import CustomKeyboard from './scr/components/Customkeyboard';

//functions

const App = () => {
  const colorScheme = Appearance.getColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        //  backgroundColor={colorScheme ? 'ligth' : 'dark'}
        translucent
        backgroundColor="#4B5EFC"
      />
      <View style={styles.topContainer}></View>
      <CustomKeyboard />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topContainer: {
    backgroundColor: 'red',
    flex: 1,
    

  },
});
