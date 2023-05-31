import { View, Button, TextInput } from 'react-native';
import { styles } from './styles.js'

//Funcion que devuelve el input y su boton de add que se mostrara al iniciar la app
export default function AddItem( { text, setText, onAddList } ){
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Enter something' 
                style={styles.input}
                value={text} //Lse ponemos como value al input el text del estado que arme
                onChangeText={(inputText) => setText(inputText)} //Lo que escriba en el input se va a ir guardando en el estado y va a pasar a ser el value que toma el input (ya que value toma a text)
            />
            <Button title='Add' color={'#C28CAE'} onPress={onAddList}/>
        </View>
    )

}

