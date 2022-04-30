import React, {useState} from 'react';
import {
  TextInput,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {assets} from '../../assets';

export const INPUT_STATES = {
  BLURRED: 'BLURRED',
  FOCUSED: 'FOCUSED',
  ERROR: 'ERROR',
  ACCEPTED: 'ACCEPTED',
};

export default function CustomTextInput({
  autoFocus,
  isRequired,
  value,
  setValue,
  checkValidity,
  title = '',
  placeholder = '',
}) {
  const [inputState, setInputState] = useState(INPUT_STATES.BLURRED);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  return (
    <View>
      {/* Title */}
      <Text style={styles.titleTxt}>
        {title}{' '}
        {isRequired ? <Text style={styles.titleRequiredMark}>*</Text> : null}
      </Text>

      {/* textinput container */}
      <View style={styles.textInpContainer(inputState)}>
        <TextInput
          selectTextOnFocus
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={() => setInputState(INPUT_STATES.FOCUSED)}
          value={value}
          onBlur={() => {
            if (isRequired && (!value || value?.length <= 0)) {
              setErrorMessage('Field is required');
              setInputState(INPUT_STATES.ERROR);
            } else
              dispatch(checkValidity()) // check if input is valid from API
                .then(() => setInputState(INPUT_STATES.ACCEPTED))
                .catch(e => {
                  setErrorMessage(e);
                  setInputState(INPUT_STATES.ERROR);
                });
          }}
          onChangeText={setValue}
          style={styles.textInput}
        />

        {/* container for tick icon if input is ACCEPTED */}
        <View style={styles.rightIconContainer}>
          {inputState == INPUT_STATES.ACCEPTED ? (
            <Image source={assets.search.icCorrect} style={styles.rightIcon} />
          ) : null}
        </View>
      </View>

      {/* error container */}
      <View style={styles.errorCont}>
        {inputState == INPUT_STATES.ERROR ? (
          <ImageBackground
            style={styles.errorBG}
            source={assets.search.errorBg}>
            <Text style={styles.errorTxt}>{errorMessage}</Text>
          </ImageBackground>
        ) : null}
      </View>
    </View>
  );
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  errorCont: {
    height: 30,
  },
  errorTxt: {
    color: 'red',
    marginTop: 5,
  },
  errorBG: {
    height: 27,
    width: 130,
    marginTop: 3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTxt: {
    fontSize: 20,
    color: 'grey',
  },
  titleRequiredMark: {
    fontSize: 25,
    color: 'red',
  },
  textInpContainer: inputState => ({
    borderWidth:
      inputState == INPUT_STATES.ERROR || inputState == INPUT_STATES.FOCUSED
        ? 1
        : 0,
    borderColor: inputState == INPUT_STATES.ERROR ? '#FF0000' : '#3267F0',
    width: width - 48,
    alignSelf: 'center',
    borderRadius: 12,
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  }),
  textInput: {
    backgroundColor: '#fff',
    opacity: 0.25,
    width: width - 80,
    height: 64,
    paddingLeft: 25,
    color: 'black',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  rightIconContainer: {
    width: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    // backgroundColor: '#446374',
    backgroundColor: '#fff',
    opacity: 0.25,
    height: 64,
    justifyContent: 'center',
  },
  rightIcon: {
    height: 16,
    width: 16,
  },
});
