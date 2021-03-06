import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';
import Colors from './../Constants/Colors';
import Input from './../UI/Input';
import Card from './../UI/Card';
import StartGamePanel from './../StartGamePanel/StartGamePanel';
import Badge from './../UI/Badge';
import { ResetAllContext } from './../ContextAPI/ResetAllContext';
import CustomButton from './../UI/Button';
import { AntDesign } from '@expo/vector-icons';

const GuessPanel = (GuessPanel) => {

    const [enteredText, setEnteredText] = useState();
    const [finalNumber, setFinalNumber] = useState();
    const [confirmed, setConfirmed] = useState(false);
    const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);

    const inputOnChangeHandler = (val) => {
        setEnteredText(val.replace(/[^\d]/, ""))
    }

    const resetHandler = () => {
        setEnteredText("");
        setConfirmed(false);
        setFinalNumber();
    }

    const ConfirmClickHandler = () => {

        if (isNaN(enteredText) || Number(enteredText) > 99 || Number(enteredText) < 1 || !String(enteredText).length) {
            return Alert.alert("", "PLEASE ENTER NUMBER BETWEEN 1 & 99", [{
                text: "OK", style: "cancel", onPress: () => {
                    setEnteredText("");
                    setFinalNumber("");
                    setConfirmed(false);
                    Keyboard.dismiss();
                }
            }, { text: "CANCEL", style: "cancel" }])
        }
        setFinalNumber(enteredText);
        setConfirmed(false);
        Keyboard.dismiss();
    }

    const StartGameSection = () => {
        if (finalNumber) {
            return (
                <Card customStyles={{ marginHorizontal: 50, marginVertical: 15 }}>
                    <Text style={{ fontFamily: "PTSansRegular" }}>Your Number is</Text>
                    <Badge>{finalNumber}</Badge>
                    <CustomButton customStyles={{ backgroundColor: Colors.secondary }} pressHandler={() => { setConfirmed(true) }}>
                        SHALL WE START <AntDesign name="right" size={16} color="#fff"></AntDesign>
                    </CustomButton>
                </Card>
            )
        }
        return null;
    }

    useEffect(() => {

        const updateLayout = () => {
            setScreenWidth(Dimensions.get("window").width);
        }

        Dimensions.addEventListener("change", updateLayout)

        return () => {
            Dimensions.removeEventListener("change", updateLayout)
        }
    })


    return (
        <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={30}>
            <ScrollView>
                <View>
                    {confirmed ?
                        <ResetAllContext.Provider value={resetHandler}>
                            <StartGamePanel finalNumber={finalNumber} resetHandler={resetHandler}>
                            </StartGamePanel>
                        </ResetAllContext.Provider>
                        : <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                            <View>
                                <Card customStyles={{ margin: 15 }}>
                                    <Input
                                        placeholder="ENTER A NUMBER"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        blurOnSubmit
                                        keyboardType="numeric"
                                        maxLength={2}
                                        ExtraStyles={{
                                            textAlign: "center"
                                        }}
                                        value={enteredText} inputOnChangeHandler={inputOnChangeHandler}>
                                    </Input>
                                    <View style={styles.ButtonArray}>
                                        <View style={{ width: screenWidth * 0.4 }}>
                                            <CustomButton customStyles={{ backgroundColor: Colors.danger }} pressHandler={resetHandler}>
                                                RESET <AntDesign name="reload1" size={16}></AntDesign>
                                            </CustomButton>
                                        </View>
                                        <View style={{ width: screenWidth * 0.4 }}>
                                            <CustomButton customStyles={{ backgroundColor: Colors.success }} pressHandler={ConfirmClickHandler}>
                                                CONFIRM <AntDesign name="check" size={16}></AntDesign>
                                            </CustomButton>
                                        </View>
                                    </View>
                                </Card>
                                {StartGameSection()}
                            </View>
                        </TouchableWithoutFeedback>}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    ButtonArray: {
        margin: 5,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    TextStyles: {
        padding: 6,
    }
})

export default GuessPanel;