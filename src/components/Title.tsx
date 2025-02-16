import React, { Fragment } from 'react';
import { Text } from 'react-native';

import { styles } from './StyleSheets';

interface TitleProps {
    title: string;
    subtitle: string;
}

export default (props: TitleProps) => {
  return (
    <>
        <Text style={styles.textBig}>{props.title}</Text>
        <Text >{props.subtitle}</Text>
    </>
  );
}