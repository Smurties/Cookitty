import React, { Component } from "react";
import { Image, FlatList, View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Title,
  Content,
  Text,
  H2
} from "native-base";
import { Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import InfoRow from "./InfoRow";
import Ingredient from "./Ingredient";

const info = [
  {
    title: "Servings ",
    number: "10"
  },
  {
    title: "Prep time",
    number: "5 mins"
  },
  {
    title: "Cook time",
    number: "5 mins"
  }
];

const ingredients = [
  {
    ingredient: "Beef",
    amount: "500g"
  },
  {
    ingredient: "Garlic",
    amount: "2 cloves"
  },
  {
    ingredient: "Oil",
    amount: "1 teaspoon"
  }
];

class RecipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {/* Header */}
        <Header>
          <Left style={ScreenStyleSheet.headerSides}>
            <Button transparent onPress={this.onBack}>
              <Icon active name="chevron-left" style={ScreenStyleSheet.icon} />
            </Button>
          </Left>
          <Body>
            <Title>Cookitty</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.onBack}>
              <Image
                style={ScreenStyleSheet.headerIcon}
                source={require("../../assets/cook.png")}
              />
              <Text style={ScreenStyleSheet.headerText}>Start</Text>
            </Button>
          </Right>
        </Header>

        <Content style={ScreenStyleSheet.content}>
          <H2>Beef</H2>
          <Text>By Daisy</Text>
          <Text>
            This dish is my go-to when I need protein and veggies in one dish,
            very easy steps, doesn’t take long to cook but still yummy.
          </Text>
          <InfoRow info={info} />
          <Text style={{ fontWeight: "bold" }}>Ingredients</Text>
          <Divider style={ScreenStyleSheet.bottomDivider} />
          <Ingredient ingredients={ingredients} />

          <Text style={{ fontWeight: "bold" }}>Steps</Text>
          <Divider style={ScreenStyleSheet.bottomDivider} />
        </Content>
      </Container>
    );
  }
}

export default RecipeScreen;
