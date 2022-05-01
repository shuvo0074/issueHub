import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchPageIndex} from '../../actions/searchActions';
import BottomtabBtnNext from './BottomtabBtnNext';
import BottomtabBtnPrevious from './BottomtabBtnPrevious';

const {width} = Dimensions.get('screen');

export default function BottomTab() {
  const dispatch = useDispatch();

  const {
    currentPageIndex,
    isLastResultPage,
  } = useSelector(state => state.issues);

  const onNextButtonPress = () => {
    dispatch(setSearchPageIndex(currentPageIndex + 1));
  };
  const onPreviousButtonPress = () => {
    dispatch(setSearchPageIndex(currentPageIndex - 1));
  };
  return (
    <View style={styles.titleRow}>
      <BottomtabBtnPrevious
        onPress={onPreviousButtonPress}
        isActive={currentPageIndex > 1}
        btnId="Previous"
      />
      <BottomtabBtnNext
        onPress={onNextButtonPress}
        isActive={!isLastResultPage}
        btnId="Next"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    height: 124,
    width,
    borderBottomColor: '#373d53',
    borderTopColor: '#373d53',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    justifyContent: 'center',
  },
});
