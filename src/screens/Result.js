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

import {useDispatch, useSelector} from 'react-redux';
import {clearResult} from '../actions/searchActions';
import {fetchIssues} from '../actions/common';
import SubmitButton from '../components/search/SubmitButton';
import Logo from '../components/global/Logo';
import ResultItem from '../components/result/ResultItem';
import IssuesHeader from '../components/result/IssuesHeader';
import IssueStateSelectorTab from '../components/result/IssueStateSelectorTab';

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
    // return () => dispatch(clearResult());
  }, [currentState]);

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
        <IssuesHeader openIssueCount={openIssueCount} />
        <IssueStateSelectorTab />
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
});

export default Result;
