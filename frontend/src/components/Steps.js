import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "native-base";

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
  }

  renderIngredients() {
    let ingredients = [];
    this.props.ingredients.map((ingredient, index) => {
      ingredients.unshift(
        <View style={styles.row} key={index}>
          <Text>{ingredient.ingredient}</Text>
          <Text>{ingredient.amount}</Text>
        </View>
      );
    });
    return ingredients;
  }
  render() {
    return <View style={styles.container}>{this.renderIngredients()}</View>;
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 5 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 1
  }
});
