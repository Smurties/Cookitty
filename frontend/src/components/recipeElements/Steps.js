import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "native-base";

export default class Steps extends Component {
  constructor(props) {
    super(props);
  }

  renderSteps() {
    let steps = [];
    this.props.steps.map((step, index) => {
      steps.push(
        <View style={styles.row} key={index}>
          <Text style={styles.stepNumber}>Step {index + 1}</Text>
          <Text style={styles.step}>{step.step}</Text>
        </View>
      );
    });
    return steps;
  }

  render() {
    return <View style={styles.container}>{this.renderSteps()}</View>;
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 5 },
  row: {
    flexDirection: "row"
  },
  stepNumber: {
    color: "gray",
    marginRight: 10
  },
  step: {
    flex: 1,
    flexWrap: "wrap"
  }
});
