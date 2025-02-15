import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { styles } from './components/StyleSheets';
import MinMax from './components/MinMax';
import RandomNumber from './components/RandomNumber';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="Cadastro de Produtos" subtitle="Tela de cadastro" />
      {/* <MinMax x={10} y={0} />
      <MinMax x={0} y={10} /> 
      <RandomNumber min={1} max={50} />
      <RandomNumber min={1} max={50} />
      <RandomNumber min={1} max={50} /> */}
      
    </View>
  );
}

