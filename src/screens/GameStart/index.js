import { useState } from "react";
import NumberInput from "../../components/NumberInput";
import PrimaryButton from "../../components/PrimaryButton";

const { View, TextInput, StyleSheet } = require("react-native");

export default function GameStart() {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(input) {
        setEnteredNumber(input);
    }

    function confirmButtonHandler() {
        
    }
    return (
        <View style={sytles.inputView}>
            <NumberInput 
                value={enteredNumber}
                onChange={numberInputHandler}
            />
            <View style={sytles.buttonsView}>
                <View style={sytles.buttonView}>
                    <PrimaryButton>Reset</PrimaryButton>
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 10,
        backgroundColor: '#4e0329',
        // Android
        elevation: 8,
        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    buttonsView: {
        flexDirection: 'row',
    },
    buttonView: {
        flex: 1,
    },
});
