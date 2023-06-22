import { StyleSheet, TextInput } from "react-native";
import Colors from "../../util/colors";

export default function NumberInput({ value, onChange }) {
    return (
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={onChange}
        />
    );
}

const styles = StyleSheet.create({
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    }
});
