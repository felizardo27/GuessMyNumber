import PrimaryButton from "../../components/PrimaryButton";

const { View, TextInput } = require("react-native");

export default function GameStart() {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}