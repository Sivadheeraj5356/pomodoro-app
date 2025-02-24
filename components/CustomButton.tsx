import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.button, { backgroundColor: 'white' }]}
        >
 <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width:333,
        borderRadius: 12,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 20,
    },
    text: {
        fontWeight: '600',
        fontSize: 18,
    },
});

export default CustomButton;
