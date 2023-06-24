import { StyleSheet, View } from "react-native";

export default function ButtonView({ children }) {
  return <View style={styles.buttonView}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
  },
});
