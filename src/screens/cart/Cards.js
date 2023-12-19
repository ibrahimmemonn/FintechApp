import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../components/common/Text';
import {useTheme} from '@react-navigation/native';
import Screen from '../../components/common/Screen';
import {CardStack} from '../../assets';
import RightIcon from '../../assets/svg/RightIcon';

const Cards = () => {
  const styles = useStyles();

  const CardRow = ({title}) => {
    return (
      <TouchableOpacity style={styles.cardDetail}>
        <Text title>{title}</Text>
        <RightIcon />
      </TouchableOpacity>
    );
  };

  return (
    <Screen title={'Cards'}>
      <View style={{paddingHorizontal: 20}}>
        <Image
          source={CardStack}
          style={styles.cardStack}
          resizeMode="contain"
        />
        <CardRow title={'View card details'} />
        <CardRow title={'Pin code'} />
        <CardRow title={'Deactivate card'} />
      </View>
    </Screen>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    cardDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.cardBackground,
      borderWidth: 1,
      borderColor: colors.primaryBorder,
      padding: 25,
      borderRadius: 20,
      marginVertical: 10,
    },
    cardStack: {
      height: 350,
      width: 350,
      alignSelf: 'center',
      marginTop: 20,
    },
  });
};
export default Cards;
