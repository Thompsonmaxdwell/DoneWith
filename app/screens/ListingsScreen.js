import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import colors from '../config/color'
import Card from "../components/Card";
const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/237549977_561005298675186_6689438421616752001_n.jpg"),
  },
];

import Screen from "../components/Screen";
import color from "../config/color";

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image} subTitle={"$" + item.price} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
         padding:20,
         backgroundColor: colors.light
    }
    
})
export default ListingsScreen;
