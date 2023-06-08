import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20, //lo agrego para que el contenedor general de por si tenga 10 de margen ademas de lo que se ordene antentro con el space-around
    paddingHorizontal: 15,
    marginVertical:25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16 //indica la sombra que tiene un elemento respecto a su dimension
  },
});
  