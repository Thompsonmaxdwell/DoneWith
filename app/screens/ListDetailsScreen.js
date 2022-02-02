import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../config/color";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpeg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Reg Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            subTitle="5 Listenings"
            title="Thompson Dev"
            image={require("../assets/thompson.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  userContainer:{
      marginVertical: 40
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
export default ListDetailsScreen;
