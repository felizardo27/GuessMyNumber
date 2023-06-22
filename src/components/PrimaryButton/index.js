import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../util/colors";

export default function PrimaryButton({ children, onPress}) {
    return (
        <View style={styles.buttonOuterView}>
            <Pressable 
                style={
                    ({ pressed }) => 
                    pressed ? [styles.buttonInnerView, styles.pressed] : styles.buttonInnerView
                    }
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterView: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerView: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});

