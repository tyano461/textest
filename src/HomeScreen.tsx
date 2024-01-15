import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, TextInput, Button } from "react-native";
import * as RNFS from 'react-native-fs';
import { RootStackParams } from "./App";

const texfilename = 'sample.tex'

const str: string = `
\documentclass[a4paper,12pt]{article}

\title{\TeX sample}

\begin{document}
\maketitle 

This is a Test \TeX

\end{document}
`

export const HomeScreen: React.FC<
  NativeStackScreenProps<RootStackParams, 'Home'>
> = ({ navigation }) => {

  const { value, onChangeText } = React.useState(str)

  console.log("value:" + value)
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={text => onChangeText(text)}
      />
      <Button title="ToPDF" onPress={() => {
        SaveTex(texfilename, value)

      }} />
    </View>
  );
};

const SaveTex = (fname: string, text: string): void => {
  RNFS.writeFile(fname, text, 'ascii').then(res => {
  }).catch(err => {
    console.log(err.message, err.code);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
