import React, { Component } from "react";
import { Container, Header, Body, Title, Content } from "native-base";
import RecipeList from "../recipeList/RecipeList";

class OriginalRecipeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return <RecipeList recipes={this.state.recipes} />;
  }
}

export default OriginalRecipeTab;
