import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../../util/colors";

export default function NumberContainer({ children, landscape = false }) {
  return (
    <View style={landscape ? [styles.container, styles.containerWide] : styles.container}>
      <Text  style={styles.numberText}>
        { children }
      </Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 24,
    margin: deviceWidth < 400 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWide: {
    padding: 12,
    margin: 12,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 400 ? 32 : 38,
    fontFamily: 'openSans-Bold',
  },
});
