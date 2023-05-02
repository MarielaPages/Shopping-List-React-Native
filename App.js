import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter something' style={styles.input}/>
        <Button title='Add' color={'#C28CAE'}/>
      </View>
      <View>
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

