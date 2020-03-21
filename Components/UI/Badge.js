import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const Badge = props => {
    return (
        <TouchableWithoutFeedback onPress={() => { return props.pressHandler ? props.pressHandler() : null }}>
            <View style={{ ...styles.viewWrapper, backgroundColor: props.WrapperBg ? props.WrapperBg : "rgb(242, 242, 242)" }}>
                <Text style={{ ...styles.TextStyles, color: props.TextColor }}>{props.children}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    viewWrapper: {
        borderWidth: 0.5,
        borderRadius: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderColor: "#ccc"
    },
    TextStyles: {
        color: "black",
        textAlign: "center",
        fontFamily: "PTSansBold"
    }
})

export default Badge;