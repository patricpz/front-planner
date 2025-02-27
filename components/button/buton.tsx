import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
    title?: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    width?: number;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ 
    title, 
    onPress, 
    style, 
    textStyle, 
    disabled = false ,
    width
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                style,
                { width: width },
                pressed && styles.pressed,
                disabled && styles.disabled,
            ]}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.8,
    },
    disabled: {
        backgroundColor: "#A9A9A9",
    },
});
