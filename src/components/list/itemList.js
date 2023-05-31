import { FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles.js'

//Funcion que devuelve un FlatList con todos los elementos que se agragaron
export default function ItemList( { list, onHandlerModal } ){
    return (
        <FlatList 
            data={list} //data toma el array list y lo convierte internamente en un array de objetos donde cada propiedad item de cada objeto de data contiene a cada uno de los objetos de list. 
            renderItem={ ({ item }) => { //Tomo como argumento de la funcion, de forma desestructurada, a cada elemento del array que genera react native en mi array data en las propiedades item (que son cada elemento de list)
            return(
                <TouchableOpacity style={styles.listItems} onPress={() => onHandlerModal(item.id)}>
                    <Text>{item.value}</Text>
                </TouchableOpacity>
            )
            }}
            keyExtractor={(item) => item.id} //Este keyExtracttor lo que hace es meter ese id que le digo que tome en la funcion de la propiedad renderItem. 
            alwaysBounceVertical={false}
      />
    )

}
