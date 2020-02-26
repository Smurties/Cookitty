import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Input,
  Toast
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenStyleSheet from '../constants/ScreenStyleSheet';
import ValidationComponent from 'react-native-form-validator';

class SignupScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.onPressSignup = this.onPressSignup.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // I do not think these are necessary

  // onChangeEmail = text => {
  //   this.setState({
  //     email: text
  //   });
  // };

  // onChangePassword = text => {
  //   this.setState({
  //     password: text
  //   });
  // };

  // onChangeConfirmPassword = text => {
  //   this.setState({
  //     confirmPassword: text
  //   });
  // };

  signup = async () => {
    console.log('singup');
    // await new Promise((resolve, reject) => {
    //   // Edit the event user clicks
    //   this.props.signup(this.username, this.state.email, this.state.password);
    //   resolve();
    // });
  };

  onPressSignup() {
    let emailValid = this.validate({
      email: { email: true, required: true }
    });

    let usernameValid = this.validate({
      username: { minlength: 3, maxlength: 30, required: true }
    });

    let pwValid = false;
    if (this.state.password == this.state.confirmPassword) {
      pwValid = true;
    }

    if (usernameValid && emailValid && pwValid) {
      this.signup();
    } else if (!usernameValid) {
      Toast.show({
        text:
          'Username should be in between 3-30 characters, please check again!'
      });
    } else if (!emailValid) {
      Toast.show({
        text: 'Invalid email format, please check again!'
      });
    } else if (!pwValid) {
      Toast.show({
        text: "Passwords don't match, please check again!"
      });
    } else {
      Toast.show({
        text: 'Something went wrong, please check again!'
      });
    }
  }

  //render the screen
  render() {
    return (
      <Container>
        {/* Header */}
        <Header
          style={{ height: 0 }}
          androidStatusBarColor={'white'}
          iosBarStyle={'dark-content'}
        />
        <Content>
          <Text style={ScreenStyleSheet.cookitty}>Cookitty</Text>

          <Item style={ScreenStyleSheet.input}>
            <Icon active name="user" style={ScreenStyleSheet.icon} />
            <Input
              placeholder="Username"
              placeholderColor={'grey'}
              value={this.state.username}
              onChangeText={this.onChange()}
            />
          </Item>
          <Item style={ScreenStyleSheet.input}>
            <Icon active name="envelope" style={ScreenStyleSheet.icon} />
            <Input
              placeholder="Email"
              placeholderColor={'grey'}
              value={this.state.email}
              onChangeText={this.onChange()}
            />
          </Item>
          <Item style={ScreenStyleSheet.input}>
            <Icon
              active
              name="lock"
              style={[ScreenStyleSheet.icon, { fontSize: 21 }]}
            />
            <Input
              placeholder="Password"
              placeholderColor={'grey'}
              onChangeText={this.onChange()}
              value={this.state.password}
              secureTextEntry={true}
            />
          </Item>
          <Item style={ScreenStyleSheet.input}>
            <Icon
              active
              name="lock"
              style={[ScreenStyleSheet.icon, { fontSize: 21 }]}
            />
            <Input
              placeholder="Confirm password"
              placeholderColor={'grey'}
              onChangeText={this.onChange()}
              value={this.state.confirmPassword}
              secureTextEntry={true}
            />
          </Item>

          <TouchableOpacity
            style={ScreenStyleSheet.authButton}
            onPress={this.onPressSignup}
          >
            {/* Login Button - redirect user to home screen if successfull */}
            <Text style={ScreenStyleSheet.authButtonText}> SIGNUP </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default SignupScreen;

//Style Sheet
const styles = StyleSheet.create({});
