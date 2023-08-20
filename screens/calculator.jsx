import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const renderButtons = () => {
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C'
    ];

    return buttons.map((button) => (
      <TouchableOpacity
        key={button}
        style={styles.button}
        onPress={() => handlePress(button)}
      >
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 36,
    marginBottom: 10,
  },
  input: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 0,
  },
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

export default Calculator;
