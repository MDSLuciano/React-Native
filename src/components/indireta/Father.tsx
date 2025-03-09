import React, { useState } from 'react'
import { Text } from 'react-native'
import Son from './Son';
import { styles } from '../StyleSheets';

export default () => {
    const [text, setText] = useState('');
    const [num, setNum] = useState(0);

    const showValue = (value: number, text: string) => {
        setNum(value);
        setText(text);
    }
    return(
        <>
            <Text style={styles.textBig}>{text}{num}</Text>
            <Son 
                min={1}
                max={50}
                function={showValue}
            />
        </>
    )
}