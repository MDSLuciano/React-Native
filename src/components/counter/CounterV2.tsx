import React, { useState } from 'react'
import { Text } from 'react-native'
import { styles } from '../StyleSheets';
import CounterDisplay from './CounterDisplay';
import CounterButton from './CounterButton';

export default () => {
    const [count, setCount] = useState(0);

    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    return(
        <>
            <Text style={styles.textBig}>
                Contador
            </Text>
            <CounterDisplay count={count} />
            <CounterButton inc={inc} dec={dec} />
        </>
    )
}