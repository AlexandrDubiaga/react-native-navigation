import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PostsList } from "../components/PostsList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { THEME } from "../theme";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/types";

export const BookedScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcons}>
          <Item
            title="Go Back"
            iconName="md-arrow-back"
            onPress={() => navigation.goBack()}
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
    title: "Избраное",

    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });

  return (
    <View>
      <PostsList
        data={useSelector(state => state.post.allPosts.filter(post=>post.booked))}
        onOpen={() => console.log("Избранное")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
  },
});
