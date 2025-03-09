import React from 'react'
import { Text } from 'react-native'
import { styles } from '../StyleSheets';

export default (props: any) => {
    return(
        <Text style={styles.textBig}>
            {props.name} {props.lastName}
        </Text>
    )
}