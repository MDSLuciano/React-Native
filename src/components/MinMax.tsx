import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './StyleSheets';

type MinMaxProps = {
  x: number,
  y: number
}

export default function MinMax({x, y}: MinMaxProps) {
  return (
      <Text style={styles.textBig}>{x > y ? `O valor de ${x} é maior que o valor de ${y}!` : `O valor de ${y} é maior que o valor de ${x}!`}</Text>
  );
}