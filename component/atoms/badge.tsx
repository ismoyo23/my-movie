import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '@style';
interface BadgeProps {
  title: string;
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({title, ...props}: BadgeProps) => {
  return (
    <View style={styles.badgeRed}>
      <Text style={styles.textSMWhite}>{title}</Text>
    </View>
  );
};
