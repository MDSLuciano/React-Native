import React from 'react'
import { Text } from 'react-native'
import { styles } from '../StyleSheets';
import { Button } from 'react-native';


export default (props: any) => {
    const generateNumber = (min: number, max: number)=> {
        const fator = max - min + 1;
        return parseInt(String(Math.random() * fator)) + min
    }
    return(
            <Button 
                title="Executar"
                onPress={() => {
                    const n = generateNumber(props.min, props.max)
                    props.function(n, 'O valor gerado foi: ')
                }}
            />
    )
}