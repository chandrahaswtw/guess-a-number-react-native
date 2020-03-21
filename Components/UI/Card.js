import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card  = props => {
    return (
    <View style={{...props.customStyles, ...Styles.CardStyles}}>{props.children}</View>
    )
}

const Styles =  StyleSheet.create({
 CardStyles : {
    paddingHorizontal: 10,
    paddingVertical: 15,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: "#fff",  //This is important else we cannot see the shadow.
    //Bydefault this is transparent.
    alignItems: "center",
    justifyContent: "space-between"
 }
})

export default Card;