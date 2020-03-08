import React, { Component } from "react";
// import { Actions } from "react-native-router-flux";
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
import { register } from "../redux/actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SignupScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.onPressSignup = this.onPressSignup.bind(this);
  }

  signup = async () => {
    console.log("singup");
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };
    this.props.register(newUser);
    // await new Promise((resolve, reject) => {
    //   // Edit the event user clicks
    //   const newUser = {
    //     name,
    //     email,
    //     password
    //   };
    //   this.props.register(newUser);
    //   resolve();
    // });
  };

  onPressSignup() {
    let emailValid = this.validate({
      email: { email: true, required: true }
    });

    let nameValid = this.validate({
      name: { minlength: 3, maxlength: 30, required: true }
    });

    let pwValid = false;
    if (this.state.password == this.state.confirmPassword) {
      pwValid = true;
    }

    if (nameValid && emailValid && pwValid) {
      this.signup();
    } else if (!nameValid) {
      Toast.show({
        text:
          "Username should be in between 3-30 characters, please check again!"
      });
    } else if (!emailValid) {
      Toast.show({
        text: "Invalid email format, please check again!"
      });
    } else if (!pwValid) {
      Toast.show({
        text: "Passwords don't match, please check again!"
      });
    } else {
      Toast.show({
        text: "Something went wrong, please check again!"
      });
    }
    this.signup();
  }

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
            <Icon active name="user" style={ScreenStyleSheet.icon} />
            <Input
              name="name"
              placeholder="Username"
              placeholderColor={"grey"}
              value={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
          </Item>
          <Item style={ScreenStyleSheet.input}>
            <Icon active name="envelope" style={ScreenStyleSheet.icon} />
            <Input
              name="email"
              placeholder="Email"
              placeholderColor={"grey"}
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
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
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry
            />
          </Item>
          <Item style={ScreenStyleSheet.input}>
            <Icon
              active
              name="lock"
              style={[ScreenStyleSheet.icon, { fontSize: 21 }]}
            />
            <Input
              name="confirmPassword"
              placeholder="Confirm password"
              placeholderColor={"grey"}
              value={this.state.confirmPassword}
              onChangeText={text => this.setState({ confirmPassword: text })}
              secureTextEntry
            />
          </Item>

          <TouchableOpacity
            style={ScreenStyleSheet.authButton}
            onPress={this.onPressSignup}
          >
            <Text style={ScreenStyleSheet.authButtonText}> SIGNUP </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

SignupScreen.proptypes = {
  register: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps, { register })(SignupScreen);
