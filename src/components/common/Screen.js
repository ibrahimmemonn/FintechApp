import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import Text from '../../components/common/Text';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Screen = ({title, children}) => {
  const styles = useStyles();
  const {colors} = useTheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      style={styles.fill}>
      <SafeAreaView style={styles.fill}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          {/* <BackButton /> */}
          <Text
            title
            style={{
              fontWeight: 'bold',
              color: colors.blacknWhite,
              fontSize: 30,
              textAlign: 'center',
              flex: 1,
            }}>
            {title}
          </Text>
        </View>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    fill: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
};
export default Screen;
