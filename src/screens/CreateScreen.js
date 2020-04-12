import React, { useState,useRef } from "react";
import {
  StyleSheet,
  Keyboard,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
import { addPost } from "../store/types";
import { connect, useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import {PhotoPicker} from '../components/PhotoPicker'



export const CreateScreen = ({ route, navigation }) => {
  const [value, setValue] = useState("");
  const imgRef = useRef();
  const dispatch = useDispatch();
  const photoPickHandler =(uri)=>{
    imgRef.current = uri
  }
  const pressHandllerr = () => {
    if (value.trim()) {
      Keyboard.dismiss();
      const post = {
        id: new Date().toJSON(),
        img:imgRef.current,
        text: value,
        date: new Date().toJSON(),
        booked: false,
      };
      setValue("");
      dispatch(addPost(post));
      navigation.navigate("Main");
    } else {
      Alert.alert("Поле не может быть пустым!");
    }
  };

  navigation.setOptions({
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
    title: "Создать",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
      padding: 60,
    },
  });
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Создать новый пост</Text>
        <TextInput
          value={value}
          placeholder={"Введите название..."}
          onChangeText={setValue}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize={"none"}
          multilines
        />
        <PhotoPicker onPick={photoPickHandler} />
   
        <Button
          style={styles.button}
          onPress={pressHandllerr} disabled={!value} title={' Создать пост'} />
         
      </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
  padding:10,
  flexDirection:'column'
  
  },
  input: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
    marginVertical: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems:'center'
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  button: {
    width: "100%"
  },
});
