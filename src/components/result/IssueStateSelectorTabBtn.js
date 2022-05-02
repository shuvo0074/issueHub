import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppIcon from '../global/AppIcon';
import {assets} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSearchState} from '../../actions/searchActions';

export default function IssueStateSelectorTabBtn({btnId}) {
  const {currentState, openIssueCount} = useSelector(state => state.issues);

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      disabled={currentState === btnId}
      onPress={() => {
        dispatch(toggleSearchState());
      }}
      style={styles.tabBtn(currentState === btnId)}>
      <AppIcon icon={assets.result[btnId]} />
      <Text style={styles.tabTxt}>{`${
        btnId === 'open' ? openIssueCount : ''
      } ${btnId}`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabBtn: isActive => ({
    width: 100,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: isActive ? 1 : 0.5,
  }),
  tabTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
});
