/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {clearResult} from '../actions/searchActions';
import {fetchIssues} from '../actions/common';
import SubmitButton from '../components/search/SubmitButton';
import Logo from '../components/global/Logo';
import ResultItem from '../components/result/ResultItem';

const {height} = Dimensions.get('screen');

const Result: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const {
    currentPageIndex,
    currentState,
    isLastResultPage,
    issueList,
    openIssueCount,
  } = useSelector(state => state.issues);

  useEffect(() => {
    dispatch(fetchIssues());
    return () => dispatch(clearResult());
  }, []);

  const backgroundStyle = {
    backgroundColor: '#040C28',
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollContainer}>
        <Logo style={styles.logo} />
        <View
          style={styles.titleRow}>
          <Text
            numberOfLines={3}
            style={styles.titleTxt}>
            Issues
          </Text>
          <View
            style={styles.countPill}>
            <Text
              numberOfLines={3}
              style={styles.pillTxt}>
              {openIssueCount}
            </Text>
          </View>
        </View>
        {issueList.map(item => (
          <ResultItem item={item} key={item.id} />
        ))}
        <SubmitButton
          title="Search Again"
          onPress={() => navigation.navigate('Search')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginLeft: 25,
  },
  scrollContainer: {
    minHeight: height,
  },
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
  }
});

export default Result;
