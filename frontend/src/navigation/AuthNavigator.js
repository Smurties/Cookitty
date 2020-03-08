import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../components/HomeScreen";
import ProfileScreen from "../components/ProfileScreen";

const AuthNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
      //   navigationOptions: {
      //     tabBarLabel: "",
      //     tabBarIcon:
      //   }
    },
    Profile: {
      screen: ProfileScreen
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
