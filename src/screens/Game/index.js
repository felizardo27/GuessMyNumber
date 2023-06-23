import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import NumberContainer from "../../components/game/NumberContainer";
import Title from "../../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function Game({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log(currentGuess)
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>
        {currentGuess}
      </NumberContainer>
      <Text>Higher or Lower?</Text>
      {/* +
      - */}
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
