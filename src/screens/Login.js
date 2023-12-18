import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Text from '../components/common/Text';

const Login = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text title style={styles.title}>
          Hey Ibrahim!
        </Text>
        <Text small style={styles.subTitle}>
          Welcome back, your account’s{'\n'}doing just fine ✌️
        </Text>
      </View>
    </SafeAreaView>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      backgroundColor: colors.background,
    },
    title: {
      fontWeight: 'bold',
      marginVertical: 5,
    },
  });
};

export default Login;
