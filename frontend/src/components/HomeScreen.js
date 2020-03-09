import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Tab,
  Tabs
} from "native-base";
import RecipeList from "./recipeList/RecipeList";
import OriginalRecipeTab from "./switchTab/OriginalRecipeTab";
import ForkedRecipeTab from "./switchTab/ForkedRecipeTab";

class HomeScreen extends Component {
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
        <Content>
          {/* <RecipeList recipes={this.state.recipes} /> */}
          <Tabs>
            <Tab heading="Original Recipe">
              <OriginalRecipeTab navigation={this.props.navigation} />
            </Tab>
            <Tab heading="Forked Recipe">
              <ForkedRecipeTab navigation={this.props.navigation} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
