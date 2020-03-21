import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...Styles.inputStyles, ...props.ExtraStyles}} onChangeText={props.inputOnChangeHandler}></TextInput>
}

const Styles = StyleSheet.create({
    inputStyles: {
        borderBottomColor : "#ccc",
        borderBottomWidth: 1,
        marginVertical: 10,
        padding : 6,
        fontFamily: "PTSansBold"
    }
})

export default Input