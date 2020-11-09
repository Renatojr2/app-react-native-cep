import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderRightColor: '#666',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    height: 35,
    paddingLeft: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#d4a902',
    width: 90,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#666',
    borderStyle: 'solid',
    borderWidth: 1,
    marginLeft: 10,
  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textContainer: {
    marginTop: 25,
  },

  textGroup: {
    flexDirection: 'row',
  },

  textTitle: {
    fontSize: 18,
    fontWeight: '600',

    marginRight: 8,
    marginBottom: 8,
  },

  textContent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
