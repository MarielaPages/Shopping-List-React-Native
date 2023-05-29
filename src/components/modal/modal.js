import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles.js'

//Funcion que devuelve modal que se mostrara si se clickea uno de los items de la lista
export default function ModalItem( { modalVisible, selectedElement, onDeleteItem, onCancelModal } ){

    return (
    <Modal //Modal nunca puede recibir estilos. Es parecido al componente Button. Los estilos dependen del contenedor que este dentro del Modal
        visible={modalVisible} //Toma el valor de true o false del estado que arme. Justamente cuando aprete el item de la lista pasara a true y se abrira. Ademas, se seteara el otro estado con el id del elemento seleccionado.
        animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalViewContainer}>
              <Text style={styles.modalTitle}>Details:</Text>
              <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailMessage}>Are you sure you want to delete this item?</Text>
                <Text style={styles.modalSelectedItem}>{selectedElement?.value}</Text>
              </View>
              <View style={styles.modalButtonContainer}>
                <Button title='Delete' color={'#C28CAE'} onPress={() => onDeleteItem(selectedElement?.id)}/>
                <Button title='Cancel' color={'#C28CAE'} onPress={() => onCancelModal()}/>
              </View>
            </View>
          </View>
      </Modal> 
    )

}