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
      search: "",
      recipes: [
        {
          recipeTitle: "stir fry beef",
          level: "easy",
          user: "user123",
          description:
            "This is a recipe for stir fry beef, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue"
        },
        {
          recipeTitle: "beef stew",
          level: "medium",
          user: "user1w3e3",
          description:
            "This is a recipe for beef stew, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue"
        },
        {
          recipeTitle: "stir fry beef",
          level: "hard",
          user: "use33wt23",
          description:
            "This is a recipe for stir fry beef, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue"
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        {/* Header */}
        <Header hasTabs>
          {/* <Body>
            <Title>Home</Title>
          </Body> */}
        </Header>

        <Content>
          {/* <RecipeList recipes={this.state.recipes} /> */}
          <Tabs>
            <Tab heading="Original Recipe">
              <OriginalRecipeTab />
            </Tab>
            <Tab heading="Forked Recipe">
              <ForkedRecipeTab />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
