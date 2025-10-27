

import { StyleSheet, Dimensions } from 'react-native';
import { FONT } from '../../assets/constant/fonts/index';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    paddingTop: height * 0.05,
  },

  title: {
    fontSize: 14,
    color: '#2C2C2C',
    fontFamily: 'Times New Roman',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 20,
    fontWeight: '300',
  },

  box: {
//     alignItems: 'center',
//     width: width * 0.9,
//     borderWidth: 1,
//     // borderColor: '#E0E0E0',
//     // borderRadius: 12,
//     // paddingVertical: 30,
//     // paddingHorizontal: 15,
//     backgroundColor: '#F9F9F9',
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 1 },
//     // shadowOpacity: 0.1,
//     // shadowRadius: 3,
//     // elevation: 2,
  },

  message: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    fontFamily: FONT.REGULAR,
    fontWeight: '500',
    width: width * 0.75,
    marginBottom: height * 0.07,
    lineHeight: 30,
  },

  button: {
    backgroundColor: '#FBDD00',
    borderRadius: 6,
    paddingVertical: 14,
    width: width * 0.7,
    alignItems: 'center',
    marginBottom: height * 0.04,
    borderWidth: 1,
    borderColor: '#2C2C2C',
  },

  buttonText: {
    color: '#2C2C2C',
    fontSize: 16,
    fontWeight: '500',
  },

  lineStyle: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: width * 0.7,
    marginVertical: 25,
  },

  orText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    fontFamily: FONT.REGULAR,
    fontWeight: '400',
    marginBottom: 25,
  },

  button2: {
    backgroundColor: '#305C50',
    borderRadius: 6,
    paddingVertical: 14,
    width: width * 0.7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#305C50',
  },

  buttonText2: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '400',
  },

  emailHeader: {
    padding: 10,
    alignItems: 'center',
    // backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  emailText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});
