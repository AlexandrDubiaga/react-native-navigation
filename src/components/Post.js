import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export const Post = ({onPress, post }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={()=>onPress()}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ url: post.img }}>
          <View style={styles.textWrapp}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textWrapp: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontFamily: "sans-regular",
  },
});
