import React, { Component } from "react";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";
import { View } from "react-native";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "./HomeScreen";
import AddRecipeScreen from "./AddRecipeScreen";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";

// https://gist.github.com/rturk/858c1afaee170a3a141adc7da652883e
//Create a class that manages the tabBar icon
class TabIcon extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center"
        }}
      >
        <Icon name={this.props.iconName || "circle"} size={40} />
      </View>
    );
  }
}

// Initializes app and redux
export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Stack key="auth" hideNavBar>
            <Scene key="login" component={LoginScreen} />
            <Scene key="signup" component={SignupScreen} />
          </Stack>
          <Stack key="app" hideNavBar panHandlers={null} type="reset">
            <Tabs showLabel={false} activeBackgroundColor="#eee">
              <Scene key="homeTab" iconName="home" icon={TabIcon} hideNavBar>
                <Scene key="home" component={HomeScreen} title="Home" />
              </Scene>

              <Scene key="addTab" iconName="plus" icon={TabIcon} hideNavBar>
                <Scene
                  key="addRecipe"
                  component={AddRecipeScreen}
                  title="Add"
                />
              </Scene>

              <Scene key="profileTab" iconName="user" icon={TabIcon} hideNavBar>
                <Scene
                  key="mainProfile"
                  component={ProfileScreen}
                  title="Profile"
                />
              </Scene>
            </Tabs>
          </Stack>
        </Stack>
      </Router>
    );
  }
}
