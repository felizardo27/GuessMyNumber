import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../util/colors";

export default function GameOver() {
  return (
    <View style={styles.rootView}>
      <Title>GAME OVER</Title>
      <View style={styles.imageView}>
        <Image source={require('../../../assets/images/success.png')} style={styles.image} />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
