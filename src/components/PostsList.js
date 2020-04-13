import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert,FlatList } from "react-native";
import { Post } from "../components/Post";

export const PostsList = ({data,onOpen}) => {
  if(!data.length){
    return <View style={styles.wrapper}>
      <Text style={styles.noItems}>Постов пока нету!</Text>
    </View>
  }
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
    noItems:{
      textAlign:'center',
      marginVertical:10,
      fontSize:18
    }
  });
  