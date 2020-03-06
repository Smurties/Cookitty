import React, { Component } from "react";
import { Container, Header, Body, Title, Content, Text } from "native-base";

class GroceryListScreen extends Component {
  render() {
    return (
      <Container>
        {/* Header */}
        <Header>
          <Body>
            <Title>Grocery List</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default GroceryListScreen;
