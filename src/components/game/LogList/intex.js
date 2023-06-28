import { FlatList, StyleSheet, View } from "react-native";
import GuessLogItem from "../GuessLogItem";

export default function LogList({ data }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={(itemData) => (
          <GuessLogItem
            roundNumber={data.length - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
