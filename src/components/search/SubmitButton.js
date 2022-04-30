import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

export default function SubmitButton({title = '', onPress = () => {}}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#9A41EA',
    height: 48,
    width: 174,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
