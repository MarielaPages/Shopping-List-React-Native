import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20,
      marginTop:20
    },
    modalViewContainer: {
      width: '100%',
      alignItems: 'center',

    },
    modalTitle: {
      fontSize:20,
      fontWeight: 'bold',
      marginBottom:10
    },
    modalDetailContainer: {
      alignItems: 'center',
      marginBottom:10
    },
    modalDetailMessage: {
      fontSize:15
    },
    modalSelectedItem: {
      fontSize:15,
      fontWeight: 'bold'
    },
    modalButtonContainer: {
      flexDirection: 'row',
      width:'60%',
      justifyContent: 'space-around',
      marginTop:20
    }
  });
  