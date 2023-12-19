import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../components/common/Text';
import BurgerMenu from '../assets/svg/BurgerMenu';
import Inbox from '../assets/svg/Inbox';
import AddCircle from '../assets/svg/AddCircle';
import {Balance, Me, NikeLogo, Payment, StarbucksLogo} from '../assets';

const Home = () => {
  const styles = useStyles();
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 20}}>
        <View style={styles.header}>
          <BurgerMenu />
          <View style={{backgroundColor: colors.blacknWhite, borderRadius: 20}}>
            <Image
              source={Me}
              style={{
                top: 1,
                width: 70,
                height: 70,
              }}
            />
          </View>
          <Inbox />
        </View>
        <View style={{zIndex: 10}}>
          <Text title style={styles.title}>
            Hey Ibrahim!
          </Text>
          <Text small style={styles.subTitle}>
            Welcome back, your account’s{'\n'}doing just fine ✌️
          </Text>

          <View style={styles.paymentView}>
            <TouchableOpacity>
              <AddCircle />
            </TouchableOpacity>
            <Text title style={styles.paymentText}>
              Schedule a{'\n'}new payment
            </Text>
            <Image
              source={Payment}
              style={styles.paymentImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.balanceView}>
            <View style={{top: -20, marginLeft: 20}}>
              <Image
                source={Balance}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.balanceSection}>
              <Text content style={styles.balanceText}>
                Balance
              </Text>
              <Text title style={styles.balanceValue}>
                € 2.380
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.balanceList}>
          <View style={styles.listView}>
            <Image
              source={NikeLogo}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
            <View style={styles.balanceTextRow}>
              <Text>Nike Footwear</Text>

              <Text content>Rs. 4,98</Text>
            </View>
          </View>
          <View style={styles.listView}>
            <Image
              source={StarbucksLogo}
              style={{
                width: 40,
                height: 40,
              }}
              resizeMode="contain"
            />
            <View style={styles.balanceTextRow}>
              <Text>Starbucks Nørreport st.</Text>

              <Text content>Rs. 4,98</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      marginVertical: 20,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      marginTop: 10,
      fontSize: 30,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    paymentView: {
      marginTop: 20,
      backgroundColor: colors.cardBackground,
      flexDirection: 'row',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
    },
    paymentText: {
      color: colors.text,
      fontWeight: '600',
      marginLeft: 15,
    },
    paymentImage: {
      width: 100,
      height: 100,
      position: 'absolute',
      right: 1,
      top: -20,
    },
    balanceSection: {
      paddingHorizontal: 20,
    },
    balanceView: {
      marginTop: 40,
      backgroundColor: colors.cardBackground,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 20,
      alignItems: 'center',
    },
    balanceText: {
      color: colors.text,
    },
    balanceValue: {
      color: colors.text,
      fontSize: 30,
      letterSpacing: 2,
      fontWeight: 'bold',
    },
    balanceList: {
      backgroundColor: colors.cardSecondaryBg,
      padding: 20,
      top: -20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    balanceTextRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      marginLeft: 10,
    },
    listView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
  });
};

export default Home;
