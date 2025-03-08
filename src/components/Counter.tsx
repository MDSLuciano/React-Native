import React, { useState } from 'react';
import { Text, Button } from 'react-native';

import { styles } from './StyleSheets';

type CounterProps = {
  initial: number;
  skip: number;
}

export default function Counter({initial = 0, skip = 1}: CounterProps) {
    const [count, setCount] = useState(initial);

    const inc = () => setCount(count + skip);

    const dec = () => setCount(count - skip);


  return (
    <>  
        <Text style={styles.textBig}>{count}</Text>
        <Button title="+" onPress={inc}/>
        <Button title="-" onPress={dec}/>
    </>
  );
}