import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import { List } from "native-base";
import RecipeItem from "./RecipeItem";
import { Divider } from "react-native-elements";
import { connect } from "react-redux";
import { getRecipes } from "../redux/actions/recipeActions";
import PropTypes from "prop-types";

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipes;
  }

  getRecipe() {
    let recipes = [];
    this.props.recipes.map((recipe, index) => {
      recipes.unshift(
        <TouchableOpacity
          key={index}
          // onPress={this.viewRecipe.bind(this, index)}
        >
          <RecipeItem
            recipeTitle={recipe.recipeTitle}
            level={recipe.level}
            user={recipe.user}
            description={recipe.description}
          />
          <Divider style={ScreenStyleSheet.divider} />
        </TouchableOpacity>
      );
    });
    return recipes;
  }

  render() {
    const { recipes } = this.props.recipe;
    return <List>{this.getRecipe()}</List>;
  }
}

RecipeList.proptypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  recipe: state.recipe
});

export default connect(mapStatetoProps, { getRecipes })(RecipeList);
