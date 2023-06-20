import { StyleSheet } from 'react-native';
import GameStart from './src/screens/GameStart';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient  
      colors={['#3b021f','#ddb52f']} 
      style={styles.rootScreen}
    >
      <GameStart />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
