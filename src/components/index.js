
//Creo un barrel (que hace que la carpeta components funcione como un modulo). 
//Aqui hago un export default de cada uno de los componentes, cosa de que dsp pueda importar 
//en app.js a cada compo como una funcion de este modulo general que armo (el barrel)
//Pudiendo meter todo en llaves y no teniendo que importar cada compo en difernetes lineas
export { default as ModalItem } from './modal/modal.js'
export { default as AddItem } from './input/addItem.js'
export { default as ItemList } from './input/addItem.js'