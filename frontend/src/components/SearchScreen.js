import React, { Component } from "react";
import { Container, Header, Body, Title, Content, Text } from "native-base";

class SearchScreen extends Component {
  render() {
    return (
      <Container>
        {/* Header */}
        <Header>
          <Body>
            <Title>Search</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default SearchScreen;
