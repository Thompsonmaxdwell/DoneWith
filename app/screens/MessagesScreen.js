import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/jacket.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/thompson.jpg"),
  },
  {
    id: 4,
    title: "T3",
    description: "D3",
    image: require("../assets/thompson.jpg"),
  },
];

function MessagesScreen() {
  // console.log(constants);
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setFreshing] = useState(false)

  const handleDelete = message =>{

    setMessages( messages.filter(m => m.id !== message.id))
  }


  return (
    <>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => alert("hello")}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={()=>handleDelete(item)} />
              )}
            />
          )}
        refreshing={refreshing}
        onRefresh= {() =>{
          setMessages([
             {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/jacket.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/thompson.jpg"),
  },
  {
    id: 4,
    title: "T3",
    description: "D3",
    image: require("../assets/thompson.jpg"),
  },
   {
    id: 5,
    title: "T1",
    description: "D1",
    image: require("../assets/jacket.jpeg"),
  },
  {
    id: 6,
    title: "T2",
    description: "D2",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 7,
    title: "T3",
    description: "D3",
    image: require("../assets/thompson.jpg"),
  },
  {
    id: 8,
    title: "T3",
    description: "D3",
    image: require("../assets/thompson.jpg"),
  },
          ])
        }}
          ItemSeparatorComponent={ListItemSeparator}
        />

        {/* <StatusBar auto/> */}
      </Screen>
    </>
  );
}

export default MessagesScreen;
