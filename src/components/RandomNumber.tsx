import React from 'react';
import { Text } from 'react-native';

import { styles } from './StyleSheets';

interface RandomNumberProps {
    min: number;
    max: number;
}
// Não é uma boa pratica alterar os valores de uma propriedade dentro da função existem
// outras maneiras e boas praticas para isso.
export default ({ min, max }: RandomNumberProps) => {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return (
    <Text style={styles.textBig}>O valor aleatório é: {random}</Text>
    );
};