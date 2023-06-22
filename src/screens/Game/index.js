import { StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";

export default function Game() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
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
