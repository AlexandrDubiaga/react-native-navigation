import React, { useState, useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { THEME } from "../theme";
import { PostsList } from "../components/PostsList";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/types";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  const allPosts = useSelector((state) => {
    return state.post.allPosts;
  });
  navigation.setOptions({
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
          <Item
            title="Take Foto"
            iconName="ios-camera"
            onPress={() => navigation.navigate("Create", { id: 44 })}
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
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
    title: "Главный экран",

    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });
  const postHandlerr = (post) => {
    return navigation.navigate("PostScreen", {
      date: post.date,
      postId: post.id,
      booked: post.booked,
      post: post,
    });
  };
  return <PostsList data={allPosts} onOpen={postHandlerr} />;
};
