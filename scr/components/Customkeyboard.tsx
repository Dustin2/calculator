import React, {useState} from 'react';
import Button from './Button';
import {Text, View} from 'react-native';
import {Styles} from '../styles/globalStyles';
import {Colors} from '../styles/Colors';

export default function CustomKeyboard() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState<Number | null>(null);

  const handlePressnumber = (buttonValue: string) => {
    if (buttonValue.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  const handleOperations = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return <>dasdsa</>;
}
