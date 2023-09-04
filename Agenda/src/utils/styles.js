import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 12,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },

  cardPrincipal1: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(248, 228, 255, 1)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 1)',
    flexDirection: 'column',
  },

  cardSecundary1: {
    padding: 8,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'rgba(223, 183, 255, 1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  boxTitle1: {
    fontSize: 40,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderColor: 'rgba(223, 183, 255, 1)',

  },

  cardPrincipal2: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 228, 228, 1)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 1)',
    flexDirection: 'column',
  },

  cardSecundary2: {
    padding: 8,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'rgba(255, 166, 219, 1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  boxTitle2: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderColor: 'rgba(255, 166, 219, 1)',
  },

  cardPrincipal3: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(252, 253, 227, 1)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 1)',
    flexDirection: 'column',
  },

  cardSecundary3: {
    padding: 8,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'rgba(246, 248, 149, 1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  boxTitle3: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderColor: 'rgba(246, 248, 149, 1)',
  },

  boxBetween: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  boxRow: {
    flexDirection: 'row'
  },

  title: {
    fontSize: 22,
    fontWeight: '500',
  },

  titleSecundary: {
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 18,
    fontWeight: '500',

  },

  textParagraph: {
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
  },

  textCard: {
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
  },

  header1: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    marginBottom:15,

  },
  header2: {
    fontSize: 20,
    fontWeight: '500',
  },

  buttonTask1: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor: 'rgba(223, 183, 255, 1)',
  },

  buttonReminder2: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor: 'rgba(255, 166, 219, 1)',
  },

  buttonActivity3: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor: 'rgba(246, 248, 149, 1)',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 40,
    fontWeight: '500',
  },

  buttonForm1: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor: 'rgba(223, 183, 255, 1)',
  },
  buttonForm2: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor:  'rgba(255, 166, 219, 1)',
  },
  buttonForm3: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor: 'rgba(246, 248, 149, 1)',
  },
  buttonCancel: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 30,
    elevation: 3,
    borderColor: 'rgba(221, 221, 221, 1)',
    backgroundColor: 'rgba(221, 221, 221, 1)',
  },

  textButtonForm: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },

  input: {
    height: 40,
    margin: 10,
    borderBottomWidth: 0.5,
    padding: 10,
  },

  butttonBox: {
    borderTopWidth: 0.5,
    marginVertical: 40,
    padding: 10,
  },

  containerForm1:{
    marginVertical:10,
    paddingVertical: 30,
    paddingHorizontal:10,
    borderTopWidth: 2,
    borderColor: 'rgba(223, 183, 255, 1)',
  },
  containerForm2:{
    marginVertical:10,
    paddingVertical: 30,
    paddingHorizontal:10,
    borderTopWidth: 2,
    borderColor: 'rgba(255, 166, 219, 1)',
  },
  containerForm3:{
    marginVertical:10,
    paddingVertical: 30,
    paddingHorizontal:10,
    borderTopWidth: 2,
    borderColor: 'rgba(246, 248, 149, 1)',
  }

});

export default styles;