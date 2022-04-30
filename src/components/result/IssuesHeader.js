import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function IssuesHeader({openIssueCount}) {
  return (
    <View style={styles.titleRow}>
      <Text numberOfLines={3} style={styles.titleTxt}>
        Issues
      </Text>
      <View style={styles.countPill}>
        <Text numberOfLines={3} style={styles.pillTxt}>
          {openIssueCount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    paddingBottom: 25,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 25,
  },
  countPill: {
    backgroundColor: '#1c243d',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  pillTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: 'grey',
  },
});
