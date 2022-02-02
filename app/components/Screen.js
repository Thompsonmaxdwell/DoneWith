import React, { Children } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen]}>
     {children}
      <StatusBar auto />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex:1,
  },
  
});
export default Screen;
