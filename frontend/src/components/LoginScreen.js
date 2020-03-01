import React from "react";
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
import { login } from "../redux/actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login() {
    // await new Promise((resolve, reject) => {
    //   // Edit the event user clicks
    //   this.props.loginUser(this.state.email, this.state.password);
    //   resolve();
    // });
    console.log("login");
  }

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

  onPressSignUp = () => {
    Actions.signup();
  };

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

LoginScreen.proptypes = {
  login: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps, { login })(LoginScreen);

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
