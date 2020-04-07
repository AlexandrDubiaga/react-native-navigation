import React, { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { DATA } from "../data";
import { Post } from "../components/Post";

export const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => {
          return post.id.toString();
        }}
        renderItem={({ item }) => (
          <Post
            onPress={() => navigation.navigate("Post", {postId: item.id})}
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
