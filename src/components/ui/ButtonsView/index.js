import { StyleSheet, View } from "react-native";

export default function ButtonsView({ children }) {
  return <View style={styles.buttonsView}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: "row",
  },
});
