import { Text, View } from "react-native";

export default function PrimaryButton({children}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}