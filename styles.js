import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal: 20 //lo agrego para que el contenedor general de por si tenga 10 de margen ademas de lo que se ordene antentro con el space-around
    },
    inputContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 40,
      // marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'space-between' //asi queda tmb espaciado afuera al mismo nivel de distancia entre ellos
    },
    input: {
      width: '80%',
      borderBottomWidth: 0.5,
      borderBottomColor: '#BA7BA1',
      // marginRight:20
    },
    listContainer: {
        marginTop: 10,
        padding: 10,
        borderWidth: 0.5,
        width: '80%'
    }
  });
  