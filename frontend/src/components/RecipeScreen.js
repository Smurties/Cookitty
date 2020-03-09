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

class RecipeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.navigation.state.params.recipe,
      index: this.props.navigation.state.params.index
    };
  }

  render() {
    return (
      <Container>
        <Content
          showsVerticalScrollIndicator={false}
          style={ScreenStyleSheet.content}
        >
          <H2>{this.state.recipe.recipeTitle}</H2>
          <Text>By {this.state.recipe.user}</Text>
          <Text>{this.state.recipe.description}</Text>
          <InfoRow info={this.state.recipe.info} />
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
          <Ingredient ingredients={this.state.recipe.ingredients} />

          <Text style={{ fontWeight: "bold" }}>Steps</Text>
          <Divider style={ScreenStyleSheet.bottomDivider} />
          <Steps steps={this.state.recipe.steps} />
        </Content>
      </Container>
    );
  }
}

export default RecipeScreen;
