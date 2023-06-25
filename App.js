import { ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import GameStart from "./src/screens/GameStart";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import Game from "./src/screens/Game";
import { StatusBar as StatusBarExp}  from "expo-status-bar";
import Colors from "./src/util/colors";
import GameOver from "./src/screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'openSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'openSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <GameStart onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} OnGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver 
      guessNumber={userNumber} 
      roundsNumber={guessRounds} 
      onStartNewGame={startNewGameHandler}
    />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <StatusBarExp style='light' />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={[styles.rootScreen, styles.androidStatusBar]}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  androidStatusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
