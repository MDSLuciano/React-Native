import React from 'react';
import { Button } from 'react-native';

import { styles } from './StyleSheets';

export default () => {
    function execute() {
        console.warn('Executando...')
    }
    return (
    
    <>
        <Button 
            title="Executar 01"
            onPress={execute}
        />
        <Button 
            title="Executar 02"
            onPress={function() {console.warn('Executando 02...')}}
        />
        <Button 
            title="Executar 03"
            onPress={() => console.warn('Executando 03...')}
        />
    </>
  );
}