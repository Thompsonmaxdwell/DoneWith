import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../config/color";
import AppText from "./AppText";

function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 200,
    width: "100%",
  },
  subTitle:{
      color: Colors.secondary,
      fontWeight: "bold"
  },
  title :{
      marginBottom: 7,
  }
});
export default Card;
