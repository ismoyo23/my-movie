import React from 'react';

// component
import {View} from 'react-native';
import {Texts} from '@atoms/text';
import {styles} from '@style';
// import icon header
import BurgerMenu from '@image/burgerMenu.svg';
import Bell from '@image/bell.svg';

// import pascode
import Pascode from '@image/pascode.svg';

export let Navbar = () => {
  return (
    <View style={{width: '100%', position: 'absolute'}}>
      <View style={styles.sectionTitle}>
        <View style={{flexDirection: 'row'}}>
          <Texts title="Ismoyo" type="medium-black" />
          <Texts title="| Filmku" type="medium-black" />
        </View>

        <View style={styles.menuLeftBar}>
          <Bell />
          <BurgerMenu style={{marginLeft: 6}} />
        </View>
      </View>
      <Pascode style={{marginTop: -9}} />
    </View>
  );
};
