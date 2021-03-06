import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Header from './Components/Header/Header';
import GuessPanel from './Components/GuessPanel/GuessPanel';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    LinJian: require("./assets/Fonts/LiuJianMaoCao-Regular.ttf"),
    PTSansRegular: require("./assets/Fonts/PTSans-Regular.ttf"),
    PTSansBold: require("./assets/Fonts/PTSans-Bold.ttf"),
  })
}

export default function App() {

  const [dataLoading, setDataLoading] = useState(true);

  if (dataLoading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => { setDataLoading(false) }}></AppLoading>
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header>GUESS A NUMBER</Header>
        </View>
        <GuessPanel></GuessPanel>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
