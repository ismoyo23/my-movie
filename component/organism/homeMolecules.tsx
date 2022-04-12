// containers
import React, {useState, useEffect} from 'react';
import {View, ImageBackground, ScrollView, Alert, Modal} from 'react-native';
import {styles} from '@style';
import {useDispatch} from 'react-redux';
// component
import {Card} from '@molecules/card';
import {CardHeader} from '@molecules/cardHeader';
import {Navbar} from '@molecules/navbar';
import {TitleList} from '@molecules/titleList';
import {Detail} from '@molecules/detail';
import bgHome from '@image/bg_home.png';
import {useTypedSelector} from '@redux/hooks/useTypeSelector';
import {getFilm} from '@redux/action/Film';
import {Footer} from '@molecules/footer';

let HomeMolecules = () => {
  let [modalVisible, setModalVisible] = useState<boolean>(false);
  let [totalSaldo, setTotalSaldo] = useState(2000000);
  let [totalPembelianFilm, setTotalPembelianFilm] = useState(100000);
  let [name, setName] = useState('');
  let [country, setCountry] = useState('');
  let [totalTiket, setTotalTiket] = useState(1);
  let {film} = useTypedSelector(state => state.filmData);
  let dispatch = useDispatch();
  let detail = (name: string, origin_country: string) => {
    setModalVisible(true);
    setName(name);
    setCountry(origin_country);
  };

  useEffect(() => {
    dispatch(getFilm());
  }, []);

  let actionBuy = () => {
    setTotalSaldo(totalSaldo - 100000);
    setTotalPembelianFilm(totalPembelianFilm + 100000);
    setTotalTiket(totalTiket + 1);
    setModalVisible(false);
    Alert.alert('Pembelian sukses');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Detail
                close={() => setModalVisible(false)}
                buy={() => actionBuy()}
                image={require(`@image/imageFilm/film.jpg`)}
                title={`${name}`}
                price="RP.100000"
                country={`${country}`}
              />
            </View>
          </View>
        </Modal>
      </View>
      <ImageBackground
        source={bgHome}
        style={styles.ImageBackground}></ImageBackground>
      {/* header */}
      <Navbar />
      {/* body */}
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 13}}>
        <CardHeader
          saldoPembelian={totalSaldo}
          totalPembelian={totalPembelianFilm}
          totalTiket={totalTiket}
        />
        <TitleList title="Daftar Film Terbaru" />

        {film.production_companies == null ? null : (
          <ScrollView horizontal={true} style={styles.scrollView}>
            {film.production_companies.map((data: string, key: number) => {
              return (
                <Card
                  action={() => detail(data.name, data.origin_country)}
                  image={require(`@image/imageFilm/film.jpg`)}
                  title={`${data.name}`}
                  price={`RP.100000`}
                  country={`${data.origin_country}`}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomeMolecules;
