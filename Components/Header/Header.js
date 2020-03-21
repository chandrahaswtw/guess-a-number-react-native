import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './../Constants/Colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.textStyles}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor : Colors.header,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyles : {
        color : "#fff",
        fontSize: 18,
        marginTop: 10,
        fontFamily: "LinJian"
    }
})

export default Header;