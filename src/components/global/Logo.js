import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {assets} from '../../assets';

export default function Logo() {
  return <Image source={assets.global.logo} style={styles.logoImg} />;
}

const styles = StyleSheet.create({
  logoImg: {
    width: 112,
    height: 84,
    marginBottom: 25,
    marginTop: 50
  },
});
