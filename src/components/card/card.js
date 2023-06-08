import React from 'react'
import { View } from 'react-native';
import { styles } from './styles.js'

//Armo una funcion que genera un componente wrapper de una card (se le pasa children como prop justamente indicando que va a envolver a otros compos)
export default function Card( { children } ){
    return (
        <View style={styles.container}>
            {children}
        </View>
    )

}
