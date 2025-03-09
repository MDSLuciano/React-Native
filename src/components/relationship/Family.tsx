import React from 'react'
import { Text } from 'react-native'
import { styles } from '../StyleSheets';

export default (props: any) => {
    return(
        <>
            <Text style={styles.textBig}>[Início]Membros da Familia: </Text>
                {props.children}
            <Text style={styles.textBig}>[Fim]Membros da Familia: </Text>
        </>
    )
}