import React from 'react';
import {StyleSheet} from 'react-native';
export let styles = StyleSheet.create({
  ImageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: -40,
  },

  CardInfoDeposit: {
    backgroundColor: 'white',
    zIndex: 1,
    marginTop: -620,
    height: 120,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  card: {
    marginLeft: 4,
    marginTop: 9,
    backgroundColor: 'white',
    shadowColor: '#33ffd6',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: 130,
    height: 210,
    borderRadius: 10,
  },

  cardDetail: {
    marginLeft: 4,
    marginTop: 9,
    backgroundColor: 'white',
    shadowColor: '#33ffd6',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  scrollView: {
    flexDirection: 'row',
    marginTop: 12,
  },

  textButtons: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
  },

  buttons: {
    width: 80,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    backgroundColor: '#F6A509',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsMedium: {
    width: '46%',
    height: 50,
    marginTop: 8,
    backgroundColor: '#F6A509',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 90,
  },
  textMiniBlack: {
    color: '#043449',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },

  cardWhite: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    width: 150,
  },

  textLWhite: {
    color: 'white',

    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginTop: 2,
  },
  textSMWhite: {
    marginTop: 3,
    color: 'white',

    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },
  distance: {marginLeft: 20, marginRight: 20, marginTop: 8},

  cardPrimmary: {
    backgroundColor: '#0976F6',
    width: '100%',
    height: '56%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },

  menuLeftBar: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },

  textSMBlack: {
    marginTop: 4,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },

  textLBlack: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },

  sectionTitle: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    marginTop: 22,
  },

  badgeRed: {
    backgroundColor: 'red',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
    height: 20,
  },

  container: {
    marginTop: 9,
    marginLeft: 10,
    marginRight: 10,
  },

  image: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  largeBlack: {fontSize: 20, color: 'black'},

  container1: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  footer: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
