import {useNavigation, useTheme} from '@react-navigation/native';
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
import AddCircle from '../assets/svg/AddCircle';
import {Balance, Me, NikeLogo, Payment, StarbucksLogo} from '../assets';
import DarkMode from '../assets/svg/DarkMode';
import LightMode from '../assets/svg/LightMode';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/appReducer';
import RNRestart from 'react-native-restart';

const Home = () => {
  const styles = useStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dark = useSelector(state => state.app.dark);

  const toggle = value => {
    dispatch(toggleTheme(value));
    RNRestart.Restart();
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <BurgerMenu />
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            backgroundColor: colors.blacknWhite,
            borderRadius: 100,
          }}>
          <Image
            source={Me}
            style={{
              top: 1,
              width: 70,
              height: 70,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggle(dark == '2' ? '1' : '2')}>
          {dark == '2' ? <LightMode /> : <DarkMode />}
        </TouchableOpacity>
      </View>
    );
  };

  const SchedulePayment = () => {
    return (
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
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 20}}>
        <Header />
        <View style={{zIndex: 10}}>
          <Text title style={styles.title}>
            Hey Ibrahim! 🚀
          </Text>
          <Text small style={styles.subTitle}>
            Welcome back, your account’s{'\n'}doing just fine.
          </Text>
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
              <Text small style={styles.balanceText}>
                Current Balance
              </Text>
              <Text title style={styles.balanceValue}>
                € 2.380
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.balanceList}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text content>Transactions</Text>
            <TouchableOpacity>
              <Text
                content
                style={{fontWeight: 'bold', color: colors.blacknWhite}}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
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
              <Text content>Nike Footwear</Text>
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
              <Text content>Starbucks Nørreport st.</Text>

              <Text content>Rs. 4,98</Text>
            </View>
          </View>
        </View>
        <SchedulePayment />
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
      fontSize: 30,
      letterSpacing: 2,
      fontWeight: 'bold',
    },
    balanceList: {
      marginTop: 20,
      backgroundColor: colors.cardSecondaryBg,
      padding: 20,
      borderRadius: 20,
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
