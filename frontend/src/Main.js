import React, { Component } from "react";
import RouterComponent from "./components/Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/authActions";

import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Button
} from "native-base";
import { StyleSheet, Text, View } from "react-native";

// Initializes app
export default class Main extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
