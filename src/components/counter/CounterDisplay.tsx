import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { styles } from '../StyleSheets';

export default (props: any) => {
    return(
        <View style={style.display}>
            <Text style={[styles.textBig, style.displayText]}>
                {props.count}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    display: {
        backgroundColor: '#000',
        padding: 20,
        width: 100
    },
    displayText: {
        color: '#fff',
    }
})