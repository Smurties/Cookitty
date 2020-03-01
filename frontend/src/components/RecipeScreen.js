import React, { Component } from "react";
import { Image, FlatList, View } from "react-native";
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

const DATA = [
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
          <Divider style={ScreenStyleSheet.contentDivider} />
          <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => (
              <View style={{ padding: 10 }}>
                <Text>{item.title}</Text>
                <Text>{item.number}</Text>
              </View>
            )}
            keyExtractor={item => item.title}
          />
          <Divider style={ScreenStyleSheet.contentDivider} />
        </Content>
      </Container>
    );
  }
}

export default RecipeScreen;
