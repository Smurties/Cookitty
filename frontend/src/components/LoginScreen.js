import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Input,
  Toast
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import ValidationComponent from "react-native-form-validator";

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // onChange = event => {
  //   const name = event.target && event.target.name;
  //   const value = event.target && event.target.value;
  //   console.log(event.target);
  //   this.setState(state => ({
  //     ...state,
  //     [name]: value
  //   }));
  //   // console.log(this.state.email, this.state.password);
  // };

  handleChange(event = {}) {
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;

    this.setState(([name]: value));
  }
  // onChangeUser = text => {
  //   this.setState({
  //     email: text
  //   });
  // };

  // onChangePassword = text => {
  //   this.setState({
  //     password: text
  //   });
  // };

  login = async () => {
    // await new Promise((resolve, reject) => {
    //   // Edit the event user clicks
    //   this.props.loginUser(this.state.email, this.state.password);
    //   resolve();
    // });
    console.log("login");
  };

  onPressLogin() {
    let valid = this.validate({
      email: { email: true, required: true }
    });

    if (valid) {
      this.login();
    } else {
      Toast.show({
        text: "Invalid email, please check again!"
      });
    }
  }

  // onPressSignUp = () => {
  //     Actions.signup();
  // };

  //render the screen
  render() {
    return (
      <Container>
        {/* Header */}
        <Header
          style={{ height: 0 }}
          androidStatusBarColor={"white"}
          iosBarStyle={"dark-content"}
        />
        <Content>
          <Text style={ScreenStyleSheet.cookitty}>Cookitty</Text>
          <Item style={ScreenStyleSheet.input}>
            <Icon active name="envelope" style={ScreenStyleSheet.icon} />
            <Input
              name="email"
              placeholder="Email"
              placeholderColor={"grey"}
              value={this.state.email}
              onChangeText={this.handleChange}
            />
          </Item>
          <Item style={ScreenStyleSheet.input}>
            <Icon
              active
              name="lock"
              style={[ScreenStyleSheet.icon, { fontSize: 21 }]}
            />
            <Input
              name="password"
              placeholder="Password"
              placeholderColor={"grey"}
              onChangeText={this.handleChange}
              value={this.state.password}
              secureTextEntry
            />
          </Item>

          <TouchableOpacity
            style={ScreenStyleSheet.authButton}
            onPress={this.onPressLogin}
          >
            {/* Login Button - redirect user to home screen if successfull */}
            <Text style={ScreenStyleSheet.authButtonText}> LOGIN </Text>
          </TouchableOpacity>
          <Text style={styles.signUp}>Don't have an account?</Text>
          <View style={styles.nestedButtonView}>
            {/* Signup Button - redirect user to signup screen if successfull */}
            <Text style={styles.signUp}>Sign up </Text>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={this.onPressSignUp}
            >
              <Text style={styles.here}>here</Text>
            </TouchableOpacity>
            <Text style={styles.signUp}>.</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;

//Style Sheet
const styles = StyleSheet.create({
  signUp: {
    fontSize: 15,
    color: "black",
    textAlign: "center"
  },
  here: {
    fontSize: 15,
    color: "grey",
    textDecorationLine: "underline",
    textAlign: "right"
  },
  nestedButtonView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  }
});
