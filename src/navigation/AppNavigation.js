import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../../src/screens/MainScreen";
import { PostScreen } from "../../src/screens/PostScreen";
import { AboutScreen } from "../../src/screens/AboutScreen";
import { CreateScreen } from "../../src/screens/CreateScreen";
import { BookedScreen } from "../../src/screens/BookedScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? "#f4511e" : "#fff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />



        
        <Stack.Screen
          name="Booked"
          component={BookedScreen}
          options={{ title: "Booked" }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreateScreen}
          options={{ title: "Создать пост" }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "О экране" }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
