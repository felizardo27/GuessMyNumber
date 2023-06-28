import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../../util/colors";

export default function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'openSans-Bold',
    color: Colors.white,
    textAlign: 'center',
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 15,
    maxWidth: '80%',
    width: 300,
  }
});
