import { useState } from "react";
import NumberInput from "../../components/ui/NumberInput";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { View, StyleSheet, Alert, Text } from "react-native";
import Colors from "../../util/colors";
import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import InstructionText from "../../components/ui/InstructionText";

export default function GameStart({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(input) {
    setEnteredNumber(input);
  }

  function confirmButtonHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 0 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetNumberHandler }]
      );
    }

    onPickNumber(chosenNumber);
  }

  function resetNumberHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <NumberInput value={enteredNumber} onChange={numberInputHandler} />
        <View style={styles.buttonsView}>
          <View style={styles.buttonView}>
            <PrimaryButton onPress={resetNumberHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonView}>
            <PrimaryButton onPress={confirmButtonHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  buttonsView: {
    flexDirection: "row",
  },
  buttonView: {
    flex: 1,
  },
});
