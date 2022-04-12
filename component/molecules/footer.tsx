import React from 'react';

// component
import {View} from 'react-native';

import {styles} from '@style';

import {Texts} from '@atoms/text';

export let Footer = () => {
  return (
    <View style={styles.footer}>
      <Texts title="Created by M. Ismoyo Setyonowidagdo" type="medium-black" />
    </View>
  );
};
