import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppIcon from '../global/AppIcon';
import {assets} from '../../assets';

export default function BottomtabBtnPrevious({
  isActive,
  btnId,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      disabled={!isActive}
      onPress={onPress}
      style={styles.tabBtn}>
      <AppIcon
        icon={
          isActive ? assets.result.icPreviousBlue : assets.result.icPreviousGrey
        }
        style={styles.arrow}
      />
      <Text style={styles.tabTxt(isActive)}>{btnId}</Text>
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
    marginLeft: 8,
    color: isActive ? '#3267F0' : 'grey',
  }),
  arrow: {
    height: 10,
    width: 10,
    marginBottom: 2,
  },
});
