
import { StyleSheet } from 'react-native';
import { FONT } from '../../assets/constant/fonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    // marginTop:20
  },

  title: {
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
    fontFamily:  FONT.REGULAR,
    marginBottom: 25,
    lineHeight: 38,
    fontWeight:'600',
    width:'90%'
  },

  highlight: {
    // color: '#000000',
    // fontFamily: 'ComingSoon',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 15,
    
  },

  label: {
    fontSize: 13,
    color: '#333333',
    marginBottom: 3,
    textTransform: 'lowercase',
    fontFamily: 'ComingSoon',
    marginLeft:21
  },

  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 13,
    fontSize: 15,
    marginBottom: 10,
    color: '#000000',
    fontFamily: 'ComingSoon',
     marginLeft:20,
    marginRight:20,
  },

  button: {
    backgroundColor: '#305C50',
    width: 315,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    // marginRight:30,
// paddingHorizontal:20,
    // marginLeft:30
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'ComingSoon',
  },

  signinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  signinText: {
    color: '#777777',
    fontSize: 15,
    fontFamily: 'ComingSoon',
  },

  signinLink: {
    color: '#777777',
    fontSize: 15,
    fontFamily: 'ComingSoon',
    marginLeft: 4,
  },

  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },

  termsText: {
    color: '#777777',
    fontSize: 14,
    marginHorizontal: 8,
    fontFamily: 'ComingSoon',
    marginTop:-2
  },

  termsDesc: {
    color: '#777777',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
    fontFamily: 'ComingSoon',
    paddingHorizontal: 10,
    marginTop:5
  },

  passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  paddingHorizontal: 12,
  // paddingVertical:20,
  marginBottom: 15,
  // width:100
  marginRight:20,
  marginLeft:20
},

passwordInput: {
  flex: 1,
  height: 50,
  fontSize: 16,
  color: '#000',
},

eyeButton: {
  padding: 3,
},

eyeIcon: {
  width: 22,
  height: 22,
  tintColor: '#666',
},

});

