import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const PostScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  return (
    <View>
      <Text style={styles.center}>Post Id: {postId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
});
