import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class RecipeItem extends Component {
  constructor(props) {
    super(props);
  }

  // render different colour for different level
  getColour() {
    if (this.props.level == "easy") {
      return "#3cb44b";
    } else if (this.props.level == "medium") {
      return "#ffe119";
    } else {
      return "#e6194B";
    }
  }

  render() {
    return (
      <View style={styles.recipe}>
        <View style={styles.titleWithLevel}>
          <Text style={styles.title}>{this.props.recipeTitle}</Text>
          <Text style={[styles.level, { backgroundColor: this.getColour() }]}>
            {this.props.level}
          </Text>
        </View>

        <Text>by {this.props.user}</Text>
        <Text numberOfLines={2}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipe: {
    margin: 10
  },
  titleWithLevel: {
    width: "100%",
    margin: 0,
    padding: 0,
    flexDirection: "row"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  level: {
    marginLeft: "auto",
    width: "25%",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 5,
    overflow: "hidden",
    textAlign: "center",
    alignSelf: "center"
  }
});

export default RecipeItem;
