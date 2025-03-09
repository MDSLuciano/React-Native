import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

export default (props: any) => {
    return(
        <View style={style.Button}>
            <Button title='+' onPress={props.inc}/>
            <Button title='-' onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 100,
        marginTop: 20,
    }
})