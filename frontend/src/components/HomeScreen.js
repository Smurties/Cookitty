import React, { Component } from "react";
import { Container, Header, Body, Title, Content } from "native-base";
import { SearchBar } from "react-native-elements";
import RecipeList from "./RecipeList";

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

  updateSearch = search => {
    this.setState({ search: search });
  };

  clearSearch = () => {
    this.setState({ search: "" });
  };

  render() {
    return (
      <Container>
        {/* Header */}
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>

        <Content>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            onClear={this.clearSearch}
            value={this.state.search}
            lightTheme
            round
          />

          {/* <RecipeItem 
                    recipeTitle={"stir fry beef"}
                    level={"easy"}
                    user={"user123"}
                    description={"This is a recipe for stir fry beef, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue"}
                /> */}

          <RecipeList recipes={this.state.recipes} />
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
