import {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeContex} from '../context/ThemeContext';
import {Styles} from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  tittle: string;
  isBlue?: Boolean;
  isGray?: Boolean;
}
export default function Button({tittle, onPress, isBlue, isGray}: ButtonProps) {
  const theme = useContext(ThemeContex);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}>
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === 'dark'
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }>
        {tittle}
      </Text>
    </TouchableOpacity>
  );
}
