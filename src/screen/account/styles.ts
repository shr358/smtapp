import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
      flex:2,
    padding: 20,
    backgroundColor: '#fff',
    marginTop:20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
  },
  profileIcon: {
    marginTop:20,
    width: 75,
     height: 75,
    borderRadius: 35,
    marginRight: 20,
    marginBottom:20,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  profileSubtitle: {
    color: '#888',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 5,
    textTransform: 'lowercase',
    color:'black',
    fontWeight:500,
  },
  emailBox: {
    backgroundColor: '#e3e3e3',
    padding: 10,
    // borderRadius: 5,
    // marginTop:10,
    marginBottom:23,
  },
  emailText: {
    fontSize: 15,
    color:'black',
    marginTop:0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    fontSize: 15,
    marginBottom:28,
  },
  button: {
    backgroundColor: '#2d6355',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  deleteText: {
    marginTop: 20,
    textAlign: 'left',
    fontSize: 14,
    fontWeight:500,
      textDecorationLine: 'underline',
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight:500,
  },
});
export default styles;