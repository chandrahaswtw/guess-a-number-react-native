import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Card from './../UI/Card';
import Badge from './../UI/Badge';
import GameOver from './../GameOver/GameOver';

const StartGamePanel = props => {

    const startNumber = useRef(1);
    const endNumber = useRef(100);
    const [isGameOver, setGameOver] = useState(false);
    const [trialCount, setTrialCount] = useState(0);

    const CalcRandom = () => {
        return Math.floor(Math.random() * (endNumber.current - startNumber.current) + startNumber.current)
    }

    const [randomNumber, setRandomNumber] = useState(CalcRandom());

    const pressPositiveNegativeHandler = (operation) => {
        if ((props.finalNumber > randomNumber && operation == "negative") || (props.finalNumber < randomNumber && operation == "positive")) {
            return Alert.alert('You\'re a liar', `Use know the operation is not ${operation} !!`, [{
                text: "CANCEL", style: "cancel"
            }])
        }

        if (operation === "positive") {
            startNumber.current = randomNumber;
        }
        else {
            endNumber.current = randomNumber;
        }
        setTrialCount(trialCount + 1);
        setRandomNumber(CalcRandom());
    }

    useEffect(() => {
        if (Number(props.finalNumber) === randomNumber) {
            setGameOver(true);
        }
    }, [randomNumber])

    return (
        <View>
            {isGameOver ? <GameOver trialCount={trialCount}></GameOver> :
                <View style={styles.wrapper}>
                    <Card>
                        <Text style={{fontFamily : "PTSansRegular"}}>THE GUESSED NUMBER IS</Text>
                        <View style={styles.BadgeRow}>
                            <Badge WrapperBg="#17a2b8" TextColor="#fff" pressHandler={pressPositiveNegativeHandler.bind(this, "negative")}>-</Badge>
                            <Badge>{randomNumber}</Badge>
                            <Badge WrapperBg="#17a2b8" TextColor="#fff" pressHandler={pressPositiveNegativeHandler.bind(this, "positive")}>+</Badge>
                        </View>
                    </Card>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    BadgeRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginVertical: 15
    }
})

export default StartGamePanel;