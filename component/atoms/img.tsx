import React from 'react';
import {Image} from 'react-native';
import {styles} from '@style';

interface ImageProps {
  imagesUrl: any;
}

/**
 * Primary UI component for user interaction
 */
export const Img = ({imagesUrl}: ImageProps) => {
  return <Image source={imagesUrl} style={styles.image} />;
};
