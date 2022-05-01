import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppIcon from '../global/AppIcon';
import {assets} from '../../assets';

export default function BottomtabBtnNext({
  isActive,
  btnId,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      disabled={isActive}
      onPress={onPress}
      style={styles.tabBtn}>
      <Text style={styles.tabTxt(isActive)}>{btnId}</Text>
      <AppIcon
        icon={isActive ? assets.result.icNextBlue : assets.result.icNextGrey}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabBtn: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTxt: isActive => ({
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    color: isActive ? '#3267F0' : 'grey',
  }),
  arrow: {
    height: 10,
    width: 10,
    marginLeft: 8,
  },
});
