import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles.js'
import { useState } from 'react';

//Funcion que devuelve lo que se renderiza o re-renderiza teniendo en cuenta cambios de estado o props
export default function App() {

  //Incializo dos estados. Uno para atrapar el texto que se escriba en el input y otro para que se sume a una lista de items que uno agregaria con el add
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Enter something' 
          style={styles.input}
          value={text} //Le ponemos como value al input el text del estado que arme
          onChangeText={(inputText) => setText(inputText)} //Lo que escriba en el input se va a ir guardando en el estado y va a pasar a ser el value que toma el input (ya que value toma a text)
        />
        <Button title='Add' color={'#C28CAE'}/>
      </View>
      <View style={styles.listContainer} > 
        <View style={styles.listItems}>
          <Text>Apples</Text>
        </View>
        <View style={styles.listItems}>
          <Text>Tomatoes</Text>
        </View>
        <View style={styles.listItems}>
          <Text>Oranges</Text>
        </View>
      </View>
    </View>
  );
}

