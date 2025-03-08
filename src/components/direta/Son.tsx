import React from 'react'
import { Text } from 'react-native'
import { styles } from '../StyleSheets';

export default (props:any) => {
    return(
        <>
            <Text style={styles.textBig}>{props.a}</Text>
            <Text style={styles.textBig}>{props.b}</Text>
        </>
    )
}