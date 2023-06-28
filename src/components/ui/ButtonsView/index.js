import { StyleSheet, View } from "react-native";

export default function ButtonsView({ children, landscape = false }) {
  return <View style={landscape == false ? styles.buttonsView : styles.buttonsViewWide}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: "row",
  },
  buttonsViewWide: {
    flexDirection: "row",
    alignItems: "center",
  }
});
