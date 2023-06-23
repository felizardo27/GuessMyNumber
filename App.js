import { ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import GameStart from "./src/screens/GameStart";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Game from "./src/screens/Game";
import { StatusBar as StatusBarExp}  from "expo-status-bar";
import Colors from "./src/util/colors";
import GameOver from "./src/screens/GameOver";


export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <GameStart onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} OnGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <StatusBarExp style='light' />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroudImage}
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
  backgroudImage: {
    opacity: 0.15,
  },
});
