import {createContext} from 'react';
import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();
export const ThemeContex = createContext(colorScheme);
