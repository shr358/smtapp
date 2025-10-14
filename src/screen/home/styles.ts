

// import { StyleSheet, Dimensions } from 'react-native';
// import { FONT } from '../../assets/constant/fonts';

// const { width, height } = Dimensions.get('window');

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     paddingTop: height * 0.08,
//         // backgroundColor:'red',
//   },

//   title: {
//     fontSize: 16,
//     color: '#6A6A6A',
//     // fontFamily: FONT.REGULAR,
//     alignSelf: 'flex-start',
//     marginLeft: 25,
//     marginBottom: 50,
//   },

//   box: {
//     // borderWidth: 2,
//     // borderColor: '#3C80F7',
//     // borderRadius: 8,
//     // width: width * 0.85,
//     // alignItems: 'center',
//     // paddingVertical: 30,
//     // backgroundColor:'green'
//   },

//   message: {
//     // flex:1,
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#000',
//     fontFamily: FONT.REGULAR, 
//     // marginBottom: 25,
//         // height: height * 0.29,
//     width : width * 0.70,
//        fontWeight:600,
 
//     marginBottom:height*0.0
//   },



//   button: {
//     backgroundColor: '#FBDD00',
//     borderRadius: 6,
//     paddingVertical: 16,
//     // paddingHorizontal:89,
//     width: width * 0.69,
//     alignItems: 'center',
//     marginBottom: height * 0.04,
//     //  marginBottom:  25
//     // marginTop:40,
//      marginTop:height * 0.08,
//      borderWidth: 1,
//     borderColor: '#2C2C2C',
//     // borderRadius: 8
//   },

// lineStyle: {
//         borderBottomWidth: 1, 
//         borderColor: 'gray', 
//         marginVertical: 30,
//         marginHorizontal:6
//     },
// // width: width * 0.69,
//   buttonText: {
//     color: '#2C2C2C',
//     // fontSize: 17,
//     // fontFamily: FONT.medium,
//     fontWeight:400
//   },

//   orText: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: '#000',
//     fontFamily: FONT.REGULAR,
//     marginBottom: 25,
//     //    height: height * 0.16,
//         fontWeight:400 
//   },

//   button2: {
//     backgroundColor: '#305C50',
//     // borderRadius: 6,
//     // paddingVertical: 12,
//     // width: width * 0.55,
//     // alignItems: 'center',
//     //  alignItems: 'center',
//      borderRadius: 6,
//     paddingVertical: 16,
//     // paddingHorizontal:89,
//     width: width * 0.69,
//     alignItems: 'center',
//     marginBottom: height * 0.00,
//     //  marginBottom:  25
//     // marginTop:40,
//     //  marginTop:height * 0.08,
//      borderWidth: 1,
//   },

//   buttonText2: {
//     color: '#FFFFFF',
//     fontSize: 19,
//     fontWeight:300
//     // fontFamily: FONT.REGULAR,
//   },
// });


import { StyleSheet, Dimensions } from 'react-native';
import { FONT } from '../../assets/constant/fonts';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: height * 0.08,
  },

  title: {
    fontSize: 20,
    color: '#2C2C2C',
    fontFamily: FONT.REGULAR,
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 20,
    fontWeight: '600',
  },

  box: {
    alignItems: 'center',
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  message: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    fontFamily: FONT.REGULAR,
    fontWeight: '500',
    width: width * 0.75,
    marginBottom: height * 0.04,
    lineHeight: 26,
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
    width: width * 0.6,
    marginVertical: 25,
  },

  orText: {
    textAlign: 'center',
    fontSize: 20,
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
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  emailText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
});
