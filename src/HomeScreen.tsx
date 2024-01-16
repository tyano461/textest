import React from "react";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import * as RNFS from 'react-native-fs';
import { RootStackParams } from "./App";
import PDFModule from "./PDFModule";

const texfilename = 'sample.tex'

const str: string = `
\\documentclass[a4paper,12pt]{article}

\\title{\\TeX sample}

\\begin{document}
\\maketitle 

This is a Test \\TeX

\\end{document}
`

export const HomeScreen: React.FC<
  NativeStackScreenProps<RootStackParams, 'Home'>
> = ({ navigation }) => {

  const [value, onChangeText] = React.useState(str)

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        value={value}
        onChangeText={text => onChangeText(text)}
      />
      <Button title="ToPDF" onPress={() => {
        SaveTex(texfilename, value, navigation)
      }} />
    </View>
  );
};

const SaveTex = (fname: string, text: string, navigation: NativeStackNavigationProp<RootStackParams, "Home", undefined>): void => {
  const fpath = RNFS.DocumentDirectoryPath + '/' + fname

  console.log("fpath:" + fpath)
  console.log("text:" + text)
  RNFS.writeFile(fpath, text, 'ascii')
    .then(res => {
      console.log("keys:" + Object.keys(PDFModule))
      PDFModule.convert(fpath, (result: any) => {
        console.log("convert:" + result)
      })
    })
    .catch(err => {
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
