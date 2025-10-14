
import { StyleSheet, Dimensions } from 'react-native';
import { FONT } from '../../assets/constant/fonts';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.08,
  },

  headerBox: {
    alignItems: 'center',
    marginBottom: height * 0.03,
  },

  logo: {
    width: width * 0.8,
    height: height * 0.17,
    marginBottom: height * 0.0,
  },

  subtitle: {
    fontSize: height * 0.043,
    color: '#000000',
    textAlign: 'center',
    lineHeight: height * 0.05,
    fontFamily: FONT.REGULAR,
    fontWeight: '100',
    marginTop: height * 0.014,
  },

  signupButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: height * 0.015,
    width: width * 0.80,
    borderRadius: 8,
    marginBottom: height * 0.05,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  signupText: {
    fontSize: height * 0.022,
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: height * 0.018,
    color: '#888',
    marginLeft: width * 0.05,
    marginBottom: height * 0.008,
    textTransform: 'lowercase',
  },

  input: {
    width: '89%',
    height: height * 0.05,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: height * 0.023,
    paddingHorizontal: width * 0.05,
    alignSelf: 'center',
  },

  signinButton: {
    backgroundColor: '#305C50',
    borderRadius: 8,
    paddingVertical: height * 0.018,
    width: width * 0.79,
    marginBottom: height * 0.018,
    marginTop: height * 0.01,
    alignSelf: 'center', 
  },

  signinText: {
    color: '#FFFFFF',
    fontSize: height * 0.022,
    fontWeight: '400',
    textAlign: 'center',
  },

  forgotPassword: {
    color: '#555',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: height * 0.02,
  },
  passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft:20,
   width: '90%',

},
eyeIcon: {
  width: 19,
  height: 22,
  marginLeft:-30,
  tintColor: '#555',
  marginBottom:20
  
  

},




});

