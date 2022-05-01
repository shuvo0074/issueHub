import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import IssueStateSelectorTabBtn from './IssueStateSelectorTabBtn';

const {width} = Dimensions.get('screen');

export default function IssueStateSelectorTab() {
  return (
    <View style={styles.titleRow}>
      <IssueStateSelectorTabBtn btnId="open" />
      <IssueStateSelectorTabBtn btnId="closed" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    backgroundColor: '#1c243d',
    height: 50,
    width,
    borderBottomColor: '#373d53',
    borderTopColor: '#373d53',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
