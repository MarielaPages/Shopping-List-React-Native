import { Text, View, TextInput, Button, FlatList } from 'react-native';
import { styles } from './styles.js'
import { useState } from 'react';

//Funcion que devuelve lo que se renderiza o re-renderiza teniendo en cuenta cambios de estado o props
export default function App() {

  //Incializo dos estados. Uno para atrapar el texto que se escriba en el input y otro para que se sume a una lista de items que uno agregaria con el add
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const onAddList = () => {
    if(text.length === 0) return // Que no haga nada si el texto esta vacio y pongo add
    if(text.length>0){ //Luego verificamos que haya texto. Si lo hay, recien ahi se podra guardar en el array. Todo esto se ejecuta al presionar el boton add (pues el puse el evento onPress)
      
      let nextId = 0;

            if(list.legth === 0){
              nextId = 1
            }
            else{
                let lastId=undefined
                list.forEach(element => {
                    lastId=element.id
                });
                nextId = lastId + 1
            } //se con esto si se borra uno, no voy a poder recuperar ese id, pero bueno, es porque quiero que sean unicos. 
      
      setList([...list, {id: nextId, value: text}]) //con el spread operator hago copia profunda de la lista que ya guarde en el array (ojo que solo hace copia profunda de los elementos que no estan nestados, si hay nested elementos tendria que usar JSON para hacer completamente profunda)
    }

    setText('') //Lo volvemos a vaciar para que puedan escribir una nueva cosa. 

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Enter something' 
          style={styles.input}
          value={text} //Lse ponemos como value al input el text del estado que arme
          onChangeText={(inputText) => setText(inputText)} //Lo que escriba en el input se va a ir guardando en el estado y va a pasar a ser el value que toma el input (ya que value toma a text)
        />
        <Button title='Add' color={'#C28CAE'} onPress={onAddList}/>
      </View>
      <FlatList 
        style={styles.listContainer}
        data={list} //data el array list, toma como valor ese array
        renderItem={ ({ item }) => { //Tomo como argumento de la funcion a cada elemento del array que genera react native con mi array data
          return(
          <View style={styles.listItems}>
            <Text>{item.value}</Text>
          </View>
          )
        }}
        keyExtractor={(item) => item.id} //Este keyExtracttor lo que hace es meter ese id que le digo que tome en la funcion de la propiedad renderItem
      />
    </View>
  );
}

