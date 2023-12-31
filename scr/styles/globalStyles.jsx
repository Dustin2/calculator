import {StyleSheet} from 'react-native';
import {Colors} from './Colors'
export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnDark: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: Colors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: Colors.black,
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    
  },
  viewBottom: {
    // marginTop:50,
    position: 'absolute',
    bottom: 50,
    
  },
  screenFirstNumber: {
    fontSize: 96,
    color: Colors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
    
  
  },
  screenSecondNumber: {
    fontSize: 40,
    color: Colors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
    
  },
});
