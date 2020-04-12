import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { AppHeaderIcons } from "../components/AppHeaderIcons";
export const CreateScreen = ({route,navigation}) => {
  
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
    },
  });
  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
});
