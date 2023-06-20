import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, onPress}) {
    return (
        <View style={styles.buttonOuterView}>
            <Pressable 
                style={
                    ({ pressed }) => 
                    pressed ? [styles.buttonInnerView, styles.pressed] : styles.buttonInnerView
                    }
                onPress={onPress} 
                android_ripple={{color: '#640233'}}
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
        backgroundColor: '#72063c',
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

