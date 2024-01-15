import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "./App";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

export const WebScreen: React.FC<
  NativeStackScreenProps<RootStackParams, 'Web'>
> = ({navigation}) => {

  return (
    <WebView style={styles.container}>
    </WebView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
