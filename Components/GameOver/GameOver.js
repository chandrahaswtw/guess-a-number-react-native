import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Badge from './../UI/Badge';
import Card from './../UI/Card';
import { ResetAllContext } from './../ContextAPI/ResetAllContext';
import CustomButton from './../UI/Button';
import Colors from './../Constants/Colors';
import { AntDesign } from '@expo/vector-icons'

const GameOver = props => {
    const resetHandler = useContext(ResetAllContext);
    return (
        <View style={styles.wrapper}>
            <Card>
                <View style={styles.gameOverImageWrapper}>
                    <Image source={require('./../../assets/Images/GameOver.jpg')}
                     style={styles.gameOverImage}></Image>
                </View>
                <Text style={styles.middleText}>TOOK {props.trialCount} TRAILS TO FINISH IT</Text>
                <View>
                <CustomButton customStyles={{ backgroundColor: Colors.primary }} pressHandler={resetHandler}>
                    START AGAIN <AntDesign name="home" size={16}></AntDesign>
                </CustomButton>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 50,
        marginTop: 20
    },
    gameOverImageWrapper: {
        height: 200,
        width: 200,
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 200,
        overflow: "hidden"
    },
    gameOverImage: {
        height: "100%",
        width: "100%",
        resizeMode:"cover",
    },
    middleText: {
        marginTop: 5,
        marginBottom: 19,
        fontFamily: "PTSansBold"
    }
})

export default GameOver;
