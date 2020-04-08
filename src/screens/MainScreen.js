import React, { useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import {THEME} from '../theme'

export const MainScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
          <Item
            title="Take Foto"
            iconName="ios-camera"
            onPress={() => alert("Take foto")}
          />
        </HeaderButtons>
      );
    },
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
          <Item
            title="Take Foto"
            iconName="ios-menu"
            onPress={() => alert("Take foto")}
          />
        </HeaderButtons>
      );
    },
    title:'Главный экран',
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor:
      Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });
  const postHandlerr=(post)=>{
    return navigation.navigate("PostScreen", {
      date: post.date,
      postId: post.id,
      booked:post.booked,
      post:post
    })
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => {
          return post.id.toString();
        }}
        renderItem={({ item }) => (
          <Post
            onPress={postHandlerr}
            post={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
