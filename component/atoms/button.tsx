import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '@style';

interface TextProps {
  title: string;
  type: string;

  action: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Buttons = ({title = 'default', type, action}: TextProps) => {
  let css;

  switch (type) {
    case 'medium':
      css = styles.buttonsMedium;
      break;

    case 'small':
      css = styles.buttons;
      break;

    default:
      css = styles.buttons;
      break;
  }
  return (
    <TouchableOpacity onPress={action} style={css}>
      <Text style={styles.textButtons}>{title}</Text>
    </TouchableOpacity>
  );
};
