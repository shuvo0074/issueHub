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
  View,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
const {height} = Dimensions.get('screen');

import {useDispatch, useSelector} from 'react-redux';
import {
  fetchSingleRepoDetails,
  fetchSingleUserDetails,
} from '../actions/common';
import CustomTextInput from '../components/search/CustomTextInput';
import {
  setRepositoryNameSearchParam,
  setUserNameSearchParam,
} from '../actions/searchActions';
import {assets} from '../assets';
import SubmitButton from '../components/search/SubmitButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Search: () => Node = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const {username_param, repository_param} = useSelector(state => state.issues);

  useEffect(() => {
    dispatch(fetchSingleUserDetails());
  }, []);

  const backgroundStyle = {
    backgroundColor: '#0c1955',
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={assets.search.searchInputBg}
        imageStyle={styles.bgImage}
        style={styles.bgContainer}>
        <Image source={assets.global.logo} style={styles.logoImg} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            marginTop: 80,
          }}>
          <CustomTextInput
            value={username_param}
            setValue={txt => dispatch(setUserNameSearchParam(txt))}
            checkValidity={fetchSingleUserDetails}
            isRequired
            autoFocus
            customStyle={styles.textInputStyle}
            title="Owner"
            placeholder="Repository Name"
          />
          <CustomTextInput
            value={repository_param}
            setValue={txt => dispatch(setRepositoryNameSearchParam(txt))}
            checkValidity={fetchSingleRepoDetails}
            isRequired
            customStyle={styles.textInputStyle}
            title="Repository"
            placeholder="Repository Name"
          />
          <SubmitButton
            title="Show Issues"
            onPress={() => navigation.navigate('Result')}
          />
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    height,
  },
  logoImg: {
    width: 112,
    height: 84,
    marginBottom: 25,
  },
  bgContainer: {
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  textInputStyle: {
    marginBottom: 25,
  },
});

export default Search;
