import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  View,
  TextInput,
  Switch,
  FlatList,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "./app/config/color";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListEditScreen from "./app/screens/ListEditScreen";
import ListItemSeparator from "./app/components/ListItemSeparator";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const listItems = [
  { title: "React Native", subTitle: "Learn React native", id: 1, image: require("./app/assets/chair.jpg"), },
  { title: "React Native", subTitle: "Learn React native", id: 2, image: require("./app/assets/chair.jpg"), },
];

function App() {
  const [category, setCategory] = useState(categories[0]);
   const [messages, setMessages] = useState(listItems);
    const [refreshing, setFreshing] = useState(false)

  return (
    <Screen>
      {/* <FlatList
        data={messages}
        keyExtractor={(listItem) => listItem.id.toString()}
        renderItem={({ item }) => (
           <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
         refreshing={refreshing}
            onRefresh= {() =>{
          setMessages([
             {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("./app/assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
      image: require("./app/assets/chair.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
  image: require("./app/assets/chair.jpg"),
  },
  {
    id: 4,
    title: "T3",
    description: "D3",
  image: require("./app/assets/chair.jpg"),
  },
   
          ])
        }}
          ItemSeparatorComponent={ListItemSeparator}
      /> */}
      <ListEditScreen />
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   Container: {
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },

// });
export default App;
