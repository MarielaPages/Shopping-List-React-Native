import { View } from 'react-native';
import { styles } from './styles.js'
import { useState } from 'react';
import { ModalItem, AddItem, ItemList } from './src/components/index.js'

//Funcion que devuelve lo que se renderiza o re-renderiza teniendo en cuenta cambios de estado o props
export default function App() {

  //Incializo dos estados. Uno para atrapar el texto que se escriba en el input y otro para que se sume a una lista de items que uno agregaria con el add
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedElement, setSelectedElement] = useState(null)

  const onAddList = () => {
    if(text.length === 0) return // Que no haga nada si el texto esta vacio y pongo add
    if(text.length>0){ //Luego verificamos que haya texto. Si lo hay, recien ahi se podra guardar en el array. Todo esto se ejecuta al presionar el boton add (pues el puse el evento onPress)
      
      let nextId = 0;

            if(list.length === 0){
              nextId = 1
            }else{
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

  const onHandlerModal = (id) => {
    setModalVisible(true)
    const selectedItem = list.find(elem => id === elem.id)
    setSelectedElement(selectedItem)
  }

  const onDeleteItem = (id) => {
    setList(list.filter(elem => id !== elem.id)) //seteamos el list con todos los elementos menos el que estamos borrando. 
    setModalVisible(false) //Lo invisibilisamos (al modal) una vez que se borra el elemento pa ver la lista que quedo sin ese elem
  }

  const onCancelModal = () => {
    setModalVisible(false) //Lo invisibilisamos
    setSelectedElement(null) //Limpiamos el estado que tendria el elemento que se clickeo
  }

  return (
    <View style={styles.container}>
      <AddItem
        text={text}
        setText={setText}
        onAddList={onAddList}
      />
      <ItemList
        list={list}
        onHandlerModal={onHandlerModal}
      />
      <ModalItem 
        modalVisible={modalVisible}
        selectedElement={selectedElement}
        onDeleteItem={onDeleteItem}
        onCancelModal={onCancelModal}
      />
    </View>
  );
}

