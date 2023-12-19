import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/common/Text';
import {useTheme} from '@react-navigation/native';
import Screen from '../../components/common/Screen';
import {CardStack} from '../../assets';

const Cards = () => {
  const styles = useStyles();
  const {colors} = useTheme();
  return (
    <Screen title={'Cards'}>
      <View style={{paddingHorizontal: 20}}>
        <Image
          source={CardStack}
          style={{height: 350, width: 350, alignSelf: 'center', marginTop: 20}}
          resizeMode="contain"
        />
        <View style={styles.cardDetail}>
          <Text content>View card details</Text>
        </View>
        <View style={styles.cardDetail}>
          <Text content>Pin code</Text>
        </View>
        <View style={styles.cardDetail}>
          <Text content>Deactivate card</Text>
        </View>
      </View>
    </Screen>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    cardDetail: {
      backgroundColor: colors.cardBackground,
      borderWidth: 1,
      borderColor: colors.primaryBorder,
      padding: 25,
      borderRadius: 20,
      marginVertical: 10,
    },
  });
};
export default Cards;
