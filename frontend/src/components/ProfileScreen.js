import React, { Component } from "react";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import { TouchableOpacity } from "react-native";
import { Container, Header, Body, Title, Content, Text } from "native-base";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.onPressLogout = this.onPressLogout.bind(this);
  }

  onPressLogout() {
    console.log("logout");
  }

  render() {
    return (
      <Container>
        {/* Header */}
        {/* <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header> */}
        <Content>
          <TouchableOpacity
            style={ScreenStyleSheet.authButton}
            onPress={this.onPressLogout}
          >
            <Text style={ScreenStyleSheet.authButtonText}> LOGOUT </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
