import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

const Text = props => {
  const {children, style, title, content, small, medium, numberOfLines} = props;
  const styles = useStyles(title, content, small, medium);
  return (
    <RNText
      numberOfLines={numberOfLines}
      {...props}
      style={[styles.text, style]}>
      {children}
    </RNText>
  );
};

const useStyles = (title, content, small, medium) => {
  const {colors} = useTheme();

  let style = {
    fontSize: 16,
  };

  let titleStyle = {
    fontSize: 18,
    fontWeight: '500',
    color: colors.primaryText,
  };

  let contentStyle = {
    fontSize: 15,
    color: colors.secondaryText,
    lineHeight: 22,
  };

  let smallStyle = {
    fontSize: 13,
    color: colors.secondaryText,
  };

  let mediumStyle = {
    fontSize: 16,
    color: colors.primaryText,
    fontWeight: '400',
  };

  if (title) {
    style = titleStyle;
  }

  if (content) {
    style = contentStyle;
  }
  if (small) {
    style = smallStyle;
  }

  if (medium) {
    style = mediumStyle;
  }

  return StyleSheet.create({
    text: style,
  });
};

export default Text;
