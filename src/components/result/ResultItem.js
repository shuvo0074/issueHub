import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {assets} from '../../assets';
import getTimeDifference from '../../services/getTimeDifference';

export default function ResultItem({item}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setIsSelected(s => !s)}
      style={styles.itemContainer(isSelected)}>
      {console.log(item, '=--=====')}
      <Image
        source={
          item.state == 'open'
            ? assets.result.openIconForList
            : assets.result.closediconForList
        }
        style={styles.listIc}
      />
      <View
        style={{
          width: width - 100,
        }}>
        <Text numberOfLines={3} style={styles.titletxt}>
          {item.title}
        </Text>
        <Text style={styles.descTxt}>{`#${
          item.number
        } opened ${getTimeDifference(item.created_at)} ago by  ${
          item.user.login
        }`}</Text>
      </View>
      {item.comments ? (
        <View
          style={{
            width: 34,
            height: 20,
            flexDirection: 'row',
            marginLeft: 5,
          }}>
          <Image source={assets.result.comments} style={styles.listIc} />
          <Text
            numberOfLines={3}
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: 'grey',
              marginLeft: 6,
            }}>
            {item.comments}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  itemContainer: isSelected => ({
    backgroundColor: isSelected ? '#1c243d' : 'transparent',
    height: 116,
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
  }),
  listIc: {
    height: 18,
    width: 18,
  },
  titletxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  descTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    marginLeft: 8,
  },
});
