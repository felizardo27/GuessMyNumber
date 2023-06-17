import NumberInput from "../../components/NumberInput";
import PrimaryButton from "../../components/PrimaryButton";

const { View, TextInput, StyleSheet } = require("react-native");

export default function GameStart() {
    return (
        <View style={sytles.inputView}>
            <NumberInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

const sytles = StyleSheet.create({
    inputView: {
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
});
