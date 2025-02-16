import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { styles } from './components/StyleSheets';
import MinMax from './components/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MinMax x={10} y={0} />
      <MinMax x={0} y={10} />
    </View>
  );
}

