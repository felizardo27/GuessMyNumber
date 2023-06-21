import { ImageBackground, StyleSheet } from 'react-native';
import GameStart from './src/screens/GameStart';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Game from './src/screens/Game';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <GameStart onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient colors={['#3b021f','#ddb52f']} style={styles.rootScreen}>
      <StatusBar style='light' />
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
      >
      {screen}
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
