import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from '../../components/common/Text';
import Screen from '../../components/common/Screen';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Me} from '../../assets';

const Profile = () => {
  const {colors} = useTheme();
  const styles = useStyles();
  return (
    <Screen title={'Profile'}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profile}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: colors.blacknWhite,
              borderRadius: 100,
              marginBottom: 10,
            }}>
            <Image
              source={Me}
              style={{
                top: 1,
                width: 100,
                height: 100,
              }}
            />
          </View>
          <Text title style={{fontSize: 25, fontWeight: 'bold'}}>
            Ibrahim Memon
          </Text>
          <Text small>052728524873261</Text>
        </TouchableOpacity>
        <View style={styles.limit}>
          <Text small> Limit</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text title style={{fontWeight: 'bold'}}>
              Incoming
            </Text>

            <Text style={{fontWeight: 'bold'}} title>
              Rs. 994,800 left
            </Text>
          </View>
          <View
            style={{
              borderWidth: 5,
              borderRadius: 20,
              marginVertical: 20,
              borderColor: colors.blacknWhite,
            }}
          />
          <Text content>
            Your Rs. 1M monthly limit resest on the 1st of the next month
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    profile: {
      alignItems: 'center',
      backgroundColor: colors.cardBackground,
      padding: 25,
      marginVertical: 10,
      borderRadius: 20,
    },
    limit: {
      backgroundColor: colors.cardBackground,
      padding: 25,
      marginVertical: 10,
      borderRadius: 20,
    },
  });
};

export default Profile;
