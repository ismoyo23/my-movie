import React from 'react';
import {Text} from 'react-native';
import {styles} from '@style';

interface TextProps {
  title: string;
  type: string;
}

/**
 * Primary UI component for user interaction
 */
export const Texts = ({title = 'default', type}: TextProps) => {
  let css;

  switch (type) {
    case 'medium-black':
      css = styles.textLBlack;
      break;

    case 'small-black':
      css = styles.textSMBlack;
      break;

    case 'mini-black':
      css = styles.textMiniBlack;
      break;

    case 'large-black':
      css = styles.largeBlack;
      break;

    case 'small-white':
      css = styles.textSMWhite;
      break;

    case 'medium-white':
      css = styles.textLWhite;
      break;

    default:
      css = styles.textLBlack;
      break;
  }
  return <Text style={css}>{title}</Text>;
};
