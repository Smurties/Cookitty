import React, { Component } from "react";
import { FlatList, View, StyleSheet, TextInput } from "react-native";
import ScreenStyleSheet from "../constants/ScreenStyleSheet";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Text,
  Button
} from "native-base";
import { Divider } from "react-native-elements";
import { connect } from "react-redux";
import { postRecipe } from "../redux/actions/recipeActions";

class AddRecipeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      details: {
        description: "",
        level: "",
        servings: "",
        prepTime: "",
        cookTime: ""
      },
      description: "",
      level: "",
      servings: "",
      prepTime: "",
      cookTime: "",
      ingredients: [{ ingredient: "", amount: "" }],
      steps: [""]
    };
  }

  // onSubmit = e => {
  //   e.preventDefault();

  //   const newRecipe = {
  //     name: this.state.name
  //   };

  addIngredientRow() {
    this.setState(previousState => ({
      ingredients: [
        ...previousState.ingredients,
        { ingredient: "", amount: "" }
      ]
    }));
  }

  addStepRow() {
    this.setState(previousState => ({
      steps: [...previousState.steps, ""]
    }));
  }

  setIngredient(ingredient, index) {
    let ingredients = [...this.state.ingredients];
    ingredients[index].ingredient = ingredient;
    this.setState({
      ingredients: ingredients
    });
  }

  setAmount(amount, index) {
    let ingredients = [...this.state.ingredients];
    ingredients[index].amount = amount;
    this.setState({
      ingredients: ingredients
    });
  }

  setStep(step, index) {
    let steps = [...this.state.steps];
    steps[index] = step;
    this.setState({
      steps: steps
    });
  }

  //   // Add recipe via postRecipe action
  //   this.props.postRecipe(newRecipe);
  // };

  render() {
    return (
      <Container>
        <Content>
          <Form style={{ marginHorizontal: 0, paddingHorizontal: 10 }}>
            <Item floatingLabel style={{ marginLeft: 0 }}>
              <Label>Title</Label>
              <Input
                maxLength={50}
                onChangeText={value => this.setState({ title: value })}
              />
            </Item>
            <Item floatingLabel style={{ marginLeft: 0 }}>
              <Label>Description</Label>
              <Input
                maxLength={150}
                onChangeText={value => this.setState({ description: value })}
              />
            </Item>

            <Item style={{ marginLeft: 0 }}>
              <Picker
                mode="dropdown"
                style={{ width: "86%", justifyContent: "space-between" }}
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select difficulty level"
                placeholderStyle={{
                  paddingLeft: 0
                }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.level}
                onValueChange={value => this.setState({ level: value })}
              >
                <Picker.Item label="Easy" value="Easy" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Hard" value="Hard" />
              </Picker>

              <Picker
                mode="dropdown"
                style={{ width: 20, justifyContent: "space-between" }}
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select difficulty level"
                placeholderStyle={{
                  paddingLeft: 0
                }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.level}
                onValueChange={value => this.setState({ level: value })}
              >
                <Picker.Item label="Easy" value="Easy" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Hard" value="Hard" />
              </Picker>
            </Item>
            <View style={styles.row}>
              <Item stackedLabel style={{ marginLeft: 0, width: "30%" }}>
                <Label>Number of Servings</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={value => this.setState({ servings: value })}
                />
              </Item>

              <Item stackedLabel style={{ width: "30%" }}>
                <Label>Prep time(mins)</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={value => this.setState({ prepTime: value })}
                />
              </Item>

              <Item stackedLabel style={{ width: "30%" }}>
                <Label>Cook time(mins)</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={value => this.setState({ cookTime: value })}
                />
              </Item>
            </View>

            <Item style={{ marginLeft: 0, marginTop: 15 }}>
              <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 17 }}>
                Ingredients
              </Text>
              <Divider style={styles.divider} />
            </Item>
            {/* Dynamic rows */}
            {this.state.ingredients.map((ingredient, index) => {
              return (
                <View style={styles.row} key={index}>
                  <View style={styles.inputWrap}>
                    <Input
                      placeholder="Ingredient"
                      style={styles.inputIngre}
                      onChangeText={text => this.setIngredient(text, index)}
                    />
                  </View>

                  <View style={styles.inputWrap}>
                    <Input
                      style={styles.inputAmount}
                      placeholder="Amount"
                      onChangeText={text => this.setAmount(text, index)}
                    />
                  </View>
                </View>
              );
            })}

            <Button transparent onPress={() => this.addIngredientRow()}>
              <Text style={{ paddingLeft: 0 }}>Add row</Text>
            </Button>

            <Item style={{ marginLeft: 0 }}>
              <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 17 }}>
                Steps
              </Text>
              <Divider style={styles.divider} />
            </Item>

            {/* Dynamic rows */}
            {this.state.steps.map((step, index) => {
              return (
                <Item style={styles.row} key={index}>
                  <Text style={styles.stepNumber}>Step {index + 1}</Text>
                  <Input
                    style={styles.inputIngre}
                    placeholder="Describe step"
                    onChangeText={text => this.setStep(text, index)}
                  />
                </Item>
              );
            })}
            <Button transparent onPress={() => this.addStepRow()}>
              <Text style={{ paddingLeft: 0 }}>Add row</Text>
            </Button>
          </Form>

          <Button
            success
            style={{
              margin: 10,
              justifyContent: "center"
            }}
          >
            <Text> Upload </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(mapStateToProps, { postRecipe })(AddRecipeScreen);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 0,
    justifyContent: "space-between"
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    justifyContent: "space-between"
  },
  inputIngre: {
    marginVertical: 10,
    marginHorizontal: 0,
    paddingLeft: 2,
    height: "auto"
  },
  inputAmount: {
    marginVertical: 10,
    paddingHorizontal: 0,
    height: "auto",

    textAlign: "right"
  },
  stepNumber: {
    color: "gray",
    marginRight: 5
  },
  step: {
    flex: 1,
    flexWrap: "wrap"
  },
  divider: {
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 0
  }
});
