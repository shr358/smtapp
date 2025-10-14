import { StyleSheet ,Dimensions} from 'react-native';
import { FONT } from '../../assets/constant/fonts';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  splashBox: {
    flex: 1,
    backgroundColor: '#305C50',
  },

  rowBox: {
    flex: 1.25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: width * 0.015,
    paddingBottom: height * 0.02,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  collezionaImage: {
    width: '95%',
    height: '100%',
    marginRight: width * 0.12,
  },

  subtitle: {
    fontSize: height * 0.045,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: height * 0.06,
    fontFamily: FONT.REGULAR,
    fontWeight: '100',
    marginTop: height * 0.025,
  },

  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.20,
    marginTop: height * 0.07,
    width: width * 0.8,
    borderRadius: width * 0.02,
    alignSelf: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: height * 0.021,
    fontWeight: '400',
    textAlign: 'center',
  },

  footerText: {
    flex: 1,
  },

  logoContainer: {
    width: width * 0.18,
    height: height * 0.12,
  },

  nameContainer: {
    width: width * 0.75,
    height: height * 0.12,
  },
});

export default styles;