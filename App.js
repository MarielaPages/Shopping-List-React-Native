import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter something' style={styles.input}/>
        <Button title='Add' color={'#C28CAE'}/>
      </View>
    </View>
  );
}

