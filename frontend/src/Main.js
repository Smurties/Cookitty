
import React, { Component } from "react";
import RouterComponent from "./components/Router";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
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
import { StyleSheet, Text, View } from 'react-native';


// Initializes app 
export default class Main extends Component {
  render() {
    return (
    //   <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
    //   </Provider>



    
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });