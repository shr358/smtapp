import { StyleSheet , Dimensions} from 'react-native';
import { FONT } from '../../assets/constant/fonts';

const {height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: height * 0.038,
    textAlign: 'center',
    color: '#000',
    fontFamily: FONT.REGULAR,
    marginBottom: height * 0.06,
    fontWeight:600,
  },

  form: {
    width: '100%',
    alignItems: 'center',
  },

  label: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 4,
    // marginRight:10,
    textTransform: 'lowercase',
    fontWeight:400,
  },

  input: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#305C50',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal:18,
    width: 300,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },

  footerText: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
  },

  signInText: {
    color: '#555',
    fontWeight: '400',
  },
});
