import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert,FlatList } from "react-native";
import { Post } from "../components/Post";

export const PostsList = ({data,onOpen}) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => {
          return post.id.toString();
        }}
        renderItem={({ item }) => (
          <Post
            onPress={onOpen}
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
  