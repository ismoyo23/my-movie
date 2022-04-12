import React from 'react';
import {View} from 'react-native';
import {styles} from '@style';
import {Texts} from '@atoms/text';
import {Buttons} from '@atoms/button';
interface CardHeaderProps {
  saldoPembelian: number;
  totalPembelian: number;
  totalTiket: number;
}
export let CardHeader = ({
  saldoPembelian,
  totalPembelian,
  totalTiket,
}: CardHeaderProps) => {
  return (
    <View style={styles.CardInfoDeposit}>
      <View style={styles.cardPrimmary}>
        <View style={styles.distance}>
          <Texts type="small-white" title="Total Saldo" />

          <Texts type="medium-white" title={saldoPembelian} />
        </View>

        <View style={styles.distance}>
          <Texts type="small-white" title="Pembelian Film" />

          <Texts type="medium-white" title={totalPembelian} />
        </View>

        <View style={styles.distance}>
          <Texts type="small-white" title="Total Tiket" />

          <Texts type="medium-white" title={totalTiket} />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.cardWhite}>
          <Texts
            type="mini-black"
            title="Saldo diatas adalah total dari semua username anda"
          />
        </View>
        <Buttons title="kelola akun" type="small" />
      </View>
    </View>
  );
};
