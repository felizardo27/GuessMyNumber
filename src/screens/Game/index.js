import { Alert, StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import NumberContainer from "../../components/game/NumberContainer";
import Title from "../../components/ui/Title";
import PrimaryButton from "../../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

  let minBoundary = 1;
  let maxBoundary = 100;

export default function Game({ userNumber }) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  
  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) || 
      (direction === 'greater' && currentGuess > userNumber)
      ) {
      Alert.alert(
          "Don't lie!", 
          'You know that this is wrong...', 
          [{
            text: 'Sorry', 
            style: 'cancel'
          }]
        );
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>
        {currentGuess}
      </NumberContainer>
      <Text>Higher or Lower?</Text>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
