import React, { useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { DATA } from "../data";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import {THEME} from '../theme'
import{PostsList} from '../components/PostsList'


export const MainScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
          <Item
            title="Take Foto"
            iconName="ios-camera"
            onPress={()=>navigation.navigate("Create",{id:44})}
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
            onPress={() => navigation.toggleDrawer() }
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
  return <PostsList data={DATA} onOpen={postHandlerr} />
};
