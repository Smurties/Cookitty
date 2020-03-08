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
  H2,
  Icon
} from "native-base";
import { Divider } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import InfoRow from "./recipeElements/InfoRow";
import Ingredient from "./recipeElements/Ingredient";
import Steps from "./recipeElements/Steps";

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

const steps = [
  {
    step: "Heat up pan, put oil ihfjskljgegen gege pan"
  },
  {
    step:
      "Heat up pan, put oil in pan, jRC lien t Heat up pan, put oil in pan, jRC lHeaHeat up pan, put oil in pan, jRC lien tt up pan, put oil in pan, jRC lien tien t Heat up pan, put oil in pan, jRC lien t"
  },
  {
    step:
      "Heat up pan, put oil in pan, jRC lien t Heat up pan, put oil in pan, jRC lHeaHeat up pan, put oil in pan, jRC lien tt up pan, put oil in pan, jRC lien tien t Heat up pan, put oil in pan, jRC lien t"
  },
  {
    step:
      "Heat up pan, put oil in pan, jRC lien t Heat up pan, put oil in pan, jRC lHeaHeat up pan, put oil in pan, jRC lien tt up pan, put oil in pan, jRC lien tien t Heat up pan, put oil in pan, jRC lien t"
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
              <FontAwesome5
                active
                name="chevron-left"
                style={ScreenStyleSheet.icon}
              />
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

        <Content
          showsVerticalScrollIndicator={false}
          style={ScreenStyleSheet.content}
        >
          <H2>Beef</H2>
          <Text>By Daisy</Text>
          <Text>
            This dish is my go-to when I need protein and veggies in one dish,
            very easy steps, doesn’t take long to cook but still yummy.
          </Text>
          <InfoRow info={info} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Button rounded light large>
              <Icon>
                <Image
                  style={ScreenStyleSheet.headerIcon}
                  source={require("../../assets/addList.png")}
                />
              </Icon>
            </Button>
            <Button rounded light large>
              <Icon>
                <Image
                  style={ScreenStyleSheet.headerIcon}
                  source={require("../../assets/cook.png")}
                />
              </Icon>
            </Button>
            <Button rounded light large>
              <Icon>
                <Image
                  style={ScreenStyleSheet.headerIcon}
                  source={require("../../assets/fork.png")}
                />
              </Icon>
            </Button>
          </View>

          <Text style={{ fontWeight: "bold" }}>Ingredients</Text>
          <Divider style={ScreenStyleSheet.bottomDivider} />
          <Ingredient ingredients={ingredients} />

          <Text style={{ fontWeight: "bold" }}>Steps</Text>
          <Divider style={ScreenStyleSheet.bottomDivider} />
          <Steps steps={steps} />
        </Content>
      </Container>
    );
  }
}

export default RecipeScreen;
