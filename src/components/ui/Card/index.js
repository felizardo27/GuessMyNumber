import { StyleSheet, View } from "react-native";
import Colors from "../../../util/colors";

export default function Card({ children }) {
  return <View style={styles.inputView}>{children}</View>;
}

const styles = StyleSheet.create({
  inputView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: Colors.primary800,
    // Android
    elevation: 8,
    // IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
