import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MainScreen } from "../../src/screens/MainScreen";
import { PostScreen } from "../../src/screens/PostScreen";
import { AboutScreen } from "../../src/screens/AboutScreen";
import { CreateScreen } from "../../src/screens/CreateScreen";
import { BookedScreen } from "../../src/screens/BookedScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const MainStackNavigator = createStackNavigator();
export const MainStack = () => {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainStackNavigator.Screen name="Main" component={MainScreen} />
      <MainStackNavigator.Screen name="PostScreen" component={PostScreen} />
    </MainStackNavigator.Navigator>
  );
};

const BookedStackNavigator = createStackNavigator();
export const BookedScreenStack = () => {
  return (
    <BookedStackNavigator.Navigator
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
      <BookedStackNavigator.Screen name="Booked" component={BookedScreen} />
    </BookedStackNavigator.Navigator>
  );
};

//
const bottomTabsConfig =
  Platform.OS === "android"
    ? {
        activeTintColor: "#fff",
        style: {
          backgroundColor: THEME.MAIN_COLOR,
        },
      }
    : {
        activeTintColor: "black",
        style: {
          backgroundColor: THEME.MAIN_COLOR,
        },
      };

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const MyTabs = () => {
  const OS =
    Platform.OS === "android"
      ? {
          activeTintColor: "#fff",
          barStyle: { backgroundColor: "THEME.MAIN_COLOR" },
        }
      : {
          tabBarOptions: {
            activeTintColor: THEME.MAIN_COLOR,
          },
        };
  return (
      <Tab.Navigator OS>
        <Tab.Screen
          name="MainStack"
          component={MainStack}
          options={{
            tabBarLabel: "Все",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-albums" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="BookedScreenStack"
          component={BookedScreenStack}
          options={{
            tabBarLabel: "Избранное",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-star" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};


const MainNavigator = createDrawerNavigator();

export const MainNavScreens=()=> {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName="Main">
        <MainNavigator.Screen name="Main" component={MyTabs} />
        <MainNavigator.Screen name="About" component={AboutScreen} />
        <MainNavigator.Screen name="Create" component={CreateScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
