import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";
import { ScrollView } from "react-native-gesture-handler";

export const PostScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const post = DATA.find((post) => post.id === postId);
  const removeHandler=()=>{
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {text: 'Удалить', onPress: () => alert('Пост '+ postId+' удалён')},
      ],
      {cancelable: false},
    );
  }
  return (
    <ScrollView>
    <View>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrapp}>
        <Text style={styles.title}>{post.text}</Text></View>
        <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrapp:{
    padding:10
  },
  title:{
    fontFamily:'sans-regular'
  }
});
