import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Linking,
} from 'react-native';
import {assets} from '../../assets';
import getTimeDifference from '../../services/getTimeDifference';
import AppIcon from '../global/AppIcon';

export default function ResultItem({item}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsSelected(s => !s);
        setTimeout(() => {
          Linking.openURL(item.html_url);
          setIsSelected(s => !s);
        }, 500);
      }}
      style={styles.itemContainer(isSelected)}>
      <AppIcon
        icon={
          item.state == 'open'
            ? assets.result.openIconForList
            : assets.result.closediconForList
        }
      />
      <View style={styles.detailsCard}>
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
        <View style={styles.commentsContainer}>
          <AppIcon icon={assets.result.comments} />
          <Text numberOfLines={3} style={styles.commentsCount}>
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
  detailsCard: {
    width: width - 100,
  },
  commentsContainer: {
    width: 34,
    height: 20,
    flexDirection: 'row',
    marginLeft: 5,
  },
  commentsCount: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    marginLeft: 6,
  },
});
