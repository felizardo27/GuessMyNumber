import { ImageBackground, StyleSheet } from 'react-native';
import GameStart from './src/screens/GameStart';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient  
      colors={['#3b021f','#ddb52f']} 
      style={styles.rootScreen}
    >
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
      >
      <GameStart />
      </ImageBackground >
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroudImage: {
    opacity: 0.15,
  }
});
