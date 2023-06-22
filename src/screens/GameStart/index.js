import { useState } from "react";
import NumberInput from "../../components/NumberInput";
import PrimaryButton from "../../components/PrimaryButton";
import { View, StyleSheet, Alert } from "react-native";

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
    <View style={sytles.inputView}>
      <NumberInput value={enteredNumber} onChange={numberInputHandler} />
      <View style={sytles.buttonsView}>
        <View style={sytles.buttonView}>
          <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
        </View>
        <View style={sytles.buttonView}>
          <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const sytles = StyleSheet.create({
  inputView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#4e0329",
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
  buttonsView: {
    flexDirection: "row",
  },
  buttonView: {
    flex: 1,
  },
});
