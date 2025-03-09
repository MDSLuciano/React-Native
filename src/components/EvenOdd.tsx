import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './StyleSheets';

export default ({num = 0}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textBig}>O valor é: {num}</Text>
            <Text style={styles.textBig}>E ele é: {num % 2 === 0 ? 'Par' : 'Impar'}</Text>
        </View>
    )
    
}