import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {assets} from '../../assets';

export default function AppIcon({style, icon = assets.search.icCorrect}) {
  return <Image source={icon} style={[styles.appIcon, style]} />;
}

const styles = StyleSheet.create({
  appIcon: {
    width: 18,
    height: 18,
  },
});
