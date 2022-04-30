import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function SubmitButton({
  disabled = false,
  title = '',
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.btnContainer(disabled)}
      onPress={onPress}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: disabled => ({
    backgroundColor: disabled ? '#652fa6' : '#9A41EA',
    height: 48,
    width: 174,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 10,
  }),
  btnTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
