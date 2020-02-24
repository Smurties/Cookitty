import React, { Component } from "react";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
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

class AddRecipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {/* Header */}
        <Header>
          <Body>
            <Title>Add</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default AddRecipeScreen;
