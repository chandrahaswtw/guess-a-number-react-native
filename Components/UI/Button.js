import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = props => {
    return (
        <TouchableOpacity onPress={props.pressHandler} activeOpacity={0.5}>
            <View style={{ ...styles.buttonWrapper, ...props.customStyles }}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        padding: 8,
        borderRadius: 3,
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontFamily: "PTSansBold",
        color: "#fff",
    }
})

export default Button;