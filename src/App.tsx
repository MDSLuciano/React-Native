import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './components/StyleSheets';
import MinMax from './components/MinMax';
import RandomNumber from './components/RandomNumber';
import Title from './components/Title';
import Button from './components/Button';
import Counter from './components/Counter';
// import Father from './components/direta/Father';
import Father from './components/indireta/Father';
import CounterV2 from './components/counter/CounterV2';
import Differentiator from './components/Differentiator';
import EvenOdd from './components/EvenOdd';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <EvenOdd num={10} />
      {/* 
      <Differentiator />
      <CounterV2 />               
      <Father />
      <Counter initial={100} skip={10} />
      <Button title="Executar"/>
      <Title title="Cadastro de Produtos" subtitle="Tela de cadastro" />
      <Button title="Cadastrar" />
      <MinMax x={10} y={0} />
      <MinMax x={0} y={10} /> 
      <RandomNumber min={1} max={50} />
      <RandomNumber min={1} max={50} />
      <RandomNumber min={1} max={50} /> 
      */}
      
    </SafeAreaView>
  );
}

