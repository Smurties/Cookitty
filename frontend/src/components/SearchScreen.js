import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Text,
  View,
  Item,
  Icon,
  Input,
  Button,
  Right
} from "native-base";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <Container>
        {/* Header */}
        <Header searchBar rounded>
          <Item>
            <Button
              transparent
              style={{
                paddingHorizontal: 0,
                marginHorizontal: 0,
                color: "gray"
              }}
            >
              <Icon
                name="search"
                style={{
                  color: "gray"
                }}
              />
            </Button>
            <Input
              placeholder="Search"
              onChangeText={text => this.setState({ search: text })}
            />
          </Item>
        </Header>
      </Container>
    );
  }
}

export default SearchScreen;
