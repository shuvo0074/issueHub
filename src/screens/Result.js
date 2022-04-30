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

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

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
        contentContainerStyle={{
          minHeight: height,
        }}>
        <Logo style={styles.logo} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#373d53',
            paddingBottom: 25,
          }}>
          <Text
            numberOfLines={3}
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#fff',
              marginLeft: 25,
            }}>
            Issues
          </Text>
          <View
            style={{
              backgroundColor: '#1c243d',
              paddingVertical: 3,
              paddingHorizontal: 6,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text
              numberOfLines={3}
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: 'grey',
              }}>
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Result;
