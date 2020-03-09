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
            "This is a recipe for stir fry beef, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue",
          info: [
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
          ],
          ingredients: [
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
          ],
          steps: [
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
          ]
        },
        {
          recipeTitle: "beef stew",
          level: "medium",
          user: "user1w3e3",
          description:
            "This is a recipe for beef stew, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue",
          info: [
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
          ],
          ingredients: [
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
          ],
          steps: [
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
          ]
        },
        {
          recipeTitle: "stir fry beef",
          level: "hard",
          user: "use33wt23",
          description:
            "This is a recipe for stir fry beef, ageljglbkgjhnnjbj hjbkjbjjnlknlkklnknklnnakheoi, agehgjlanjhjkegburgkjnkaghue",
          info: [
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
          ],
          ingredients: [
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
          ],
          steps: [
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
          ]
        }
      ]
    };
  }

  render() {
    return (
      <RecipeList
        recipes={this.state.recipes}
        navigation={this.props.navigation}
      />
    );
  }
}

export default OriginalRecipeTab;
