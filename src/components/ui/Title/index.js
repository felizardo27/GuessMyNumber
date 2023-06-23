import { StyleSheet, Text } from "react-native";
import Colors from "../../../util/colors";

export default function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 15,
  }
});
