import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../util/colors";
import PrimaryButton from "../../components/ui/PrimaryButton";

export default function GameOver({
  roundsNumber,
  guessNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 400) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootView}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageView, imageStyle]}>
          <Image
            source={require("../../../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{guessNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootView: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    // height: deviceWidth < 400 ? 150 : 300,
    // width: deviceWidth < 400 ? 150 : 300,
    // borderRadius: deviceWidth < 400 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 26,
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
