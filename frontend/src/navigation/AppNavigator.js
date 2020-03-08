import { StatusBar, AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";
import AuthNavigator from "./AuthNavigator";

StatusBar.setBarStyle("dark-content", true);

const Navigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
      gestureEnabled: true
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Signup",
      gestureEnabled: true
    }
  },
  Cookitty: {
    screen: AuthNavigator
  }
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
