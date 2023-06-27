import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../util/colors";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function GameOver({ roundsNumber, guessNumber, onStartNewGame }) {
  return (
    <View style={styles.rootView}>
      <Title>GAME OVER</Title>
      <View style={styles.imageView}>
        <Image
          source={require("../../../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlight}>{guessNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    height: deviceWidth < 400 ? 150 : 300,
    width: deviceWidth < 400 ? 150 : 300,
    borderRadius: deviceWidth < 400 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "openSans-Regular",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "openSans-Bold",
    color: Colors.primary500,
  },
});
