import {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeContex} from '../context/ThemeContext';
import {Styles} from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: Boolean;
  isGray?: Boolean;
}
export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
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
        {title}
      </Text>
    </TouchableOpacity>
  );
}
