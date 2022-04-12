import React, {useState} from 'react';

// component
import {View, TouchableOpacity} from 'react-native';

import {styles} from '@style';
import {Img} from '@atoms/img';
import {Badge} from '@atoms/badge';
import {Texts} from '@atoms/text';

interface CardProps {
  image: any;
  title: string;
  price: string;
  country: string;
  action: () => void;
}

export let Card = ({image, title, price, country, action}: CardProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.card}>
      <Img imagesUrl={image} />
      <View style={styles.container}>
        <Texts title={title} type="medium-black" />
        <Texts title={price} type="small-black" />
        <Badge title={country} />
      </View>
    </TouchableOpacity>
  );
};
