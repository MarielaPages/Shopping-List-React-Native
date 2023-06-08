import { View } from 'react-native'
import { styles } from './styles.js'
import { ShoppingList } from './src/screens/index.js' //Importe la pantalla de ese modulo que arme (barrel)

//Funcion que devuelve lo que se renderiza o re-renderiza teniendo en cuenta cambios de estado o props
export default function App() {

  return (
    <View style={styles.container}>
      <ShoppingList/>
    </View>
  )

}

