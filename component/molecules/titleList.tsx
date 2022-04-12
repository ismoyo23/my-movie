import React from 'react';
import {View} from 'react-native';
import {Texts} from '@atoms/text';

interface TitleListProps {
  title: string;
}

export let TitleList = ({title}: TitleListProps) => {
  return (
    <View style={{marginTop: 30, width: '100%', height: '43%'}}>
      <Texts title={title} type="large-black" />
    </View>
  );
};
