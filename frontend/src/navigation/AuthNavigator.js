import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import AddRecipeScreen from "../components/AddRecipeScreen";
import GroceryListScreen from "../components/GroceryListScreen";
import ProfileScreen from "../components/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const AuthNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused, tintColor: color }) => (
          <Icon name="home" size={20} color={color} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ focused, tintColor: color }) => (
          <Icon name="search" size={20} color={color} />
        )
      }
    },
    Add: {
      screen: AddRecipeScreen,
      navigationOptions: {
        title: "Add",
        tabBarIcon: ({ focused, tintColor: color }) => (
          <Icon name="plus" size={20} color={color} />
        )
      }
    },
    GroceryList: {
      screen: GroceryListScreen,
      navigationOptions: {
        title: "Grocery List",
        tabBarIcon: ({ focused, tintColor: color }) => (
          <Icon name="list" size={20} color={color} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ focused, tintColor: color }) => (
          <Icon name="user" size={20} color={color} />
        )
      }
    }
  }
  //   {
  //     tabBarOptions: {
  //       labelStyle: {
  //         fontWeight: "600",
  //         marginBottom: 5
  //       },
  //       activeTintColor: colors.black
  //     },
  //     tabBarPosition: "bottom"
  //   }
);

export default AuthNavigator;
