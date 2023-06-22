import { StyleSheet, Text, View } from "react-native";

export default function Game() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
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
    padding: 12,
  }
});
