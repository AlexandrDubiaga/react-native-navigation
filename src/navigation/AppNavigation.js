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

const MainStack = createStackNavigator();
export const MainScreenNavigator = () => {
  return (
    <MainStack.Navigator
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
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="PostScreen" component={PostScreen} />
    </MainStack.Navigator>
  );
};

const BookedStack = createStackNavigator();
export const BookedScreenNavigator = () => {
  return (
    <BookedStack.Navigator
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
      <BookedStack.Screen name="Booked" component={BookedScreen} />
    </BookedStack.Navigator>
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
        name="MainScreen"
        component={MainScreenNavigator}
        options={{
          tabBarLabel: "Все",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-albums" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="BookedScreen"
        component={BookedScreenNavigator}
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

const AboutStack = createStackNavigator();
export const AboutScreenNavigator = (props) => {
  return (
    <AboutStack.Navigator
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
      <AboutStack.Screen name="AboutScreen" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};
const CreateStack = createStackNavigator();
export const CreateScreenNavigator = (props) => {
  return (
    <CreateStack.Navigator
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
      <CreateStack.Screen name="Create" component={CreateScreen} />
    </CreateStack.Navigator>
  );
};

const MainNavigator = createDrawerNavigator();

export const MainNavScreens = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        initialRouteName="Main"
        drawerStyle={{
          backgroundColor: "#c6cbef",
          width: 240,
        }}
      
        
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10, },
        }}
      >
        <MainNavigator.Screen
          name="Main"
          options={{
            drawerLabel: "Главная",
            drawerIcon: () => <Ionicons name="ios-star" />,
          }}
          component={MyTabs}
        />
        <MainNavigator.Screen
          name="AboutScreen"
          options={{
            drawerLabel: "О приложении",
          }}
          component={AboutScreenNavigator}
        />
        <MainNavigator.Screen
          name="Create"
          options={{
            drawerLabel: "Создать пост",
          }}
          component={CreateScreenNavigator}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
