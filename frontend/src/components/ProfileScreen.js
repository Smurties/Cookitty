import React, { Component } from "react";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import { TouchableOpacity } from "react-native";
import { Container, Header, Body, Title, Content, Text } from "native-base";
import { logout } from "../redux/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.onPressLogout = this.onPressLogout.bind(this);
  }

  onPressLogout() {
    this.props.logout();
    console.log(this.props.auth);
    if (!this.props.auth.isAuthenticated) {
      this.props.navigation.navigate("Login");
    }
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

ProfileScreen.proptypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(ProfileScreen);
