import React, {useState} from 'react';

// component
import {View} from 'react-native';

import {styles} from '@style';
import {Img} from '@atoms/img';
import {Buttons} from '@atoms/button';
import {Texts} from '@atoms/text';

interface DetailProps {
  image: any;
  title: string;
  price: string;
  country: string;
  buy: () => void;
  close: () => void;
}

export let Detail = ({
  image,
  title,
  price,
  country,
  close,
  buy,
}: DetailProps) => {
  return (
    <View>
      <View style={styles.cardDetail}>
        <Img imagesUrl={image} />
        <View style={styles.container}>
          <Texts title={title} type="medium-black" />
          <Texts title={price} type="small-black" />
          <Texts title={'Negara: ' + country} type="small-black" />
          <View style={styles.flex}>
            <Buttons action={buy} type="medium" title="Buy" />
            <Buttons action={close} type="medium" title="Close" />
          </View>
        </View>
      </View>
    </View>
  );
};
