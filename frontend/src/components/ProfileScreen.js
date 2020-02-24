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


class ProfileScreen extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <Container>
            {/* Header */}
            <Header>
              <Body>
                <Title>Profile</Title>
              </Body>
            </Header>
          </Container>
        );
    
    }
  
}

export default ProfileScreen; 