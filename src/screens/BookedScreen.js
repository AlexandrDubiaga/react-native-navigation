import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { DATA } from "../data";
import { PostsList } from "../components/PostsList";

export const BookedScreen = ({ navigation }) => {
  navigation.setOptions({
    title: "Избранное",
  });

  const posts = DATA.filter((post) => post.booked);
  return (
    <View>
      <PostsList data={posts} onOpen={()=>console.log('Избранное')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
  },
});
