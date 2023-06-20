import { StyleSheet, View } from 'react-native';
import GameStart from './src/screens/GameStart';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <GameStart />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});
