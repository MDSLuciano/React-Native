import React from 'react'
import { Platform, Text } from 'react-native'
import { styles } from './StyleSheets';

export default () => {
    if(Platform.OS === 'ios'){
        return(
            <Text style={styles.textBig}>IOS</Text>
        )
    }else if(Platform.OS === 'android'){
        return(
            <Text style={styles.textBig}>ANDROID</Text>
        )
    }else {
        return(
            <Text style={styles.textBig}>DEFAULT</Text>
        )
    }
}