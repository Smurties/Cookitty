import React, { Component } from 'react';
import ScreenStyleSheet from '../constants/ScreenStyleSheet';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Button
} from 'native-base';
import { connect } from 'react-redux';
import { postRecipe } from '../action/recipeActions';

class AddRecipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  // onSubmit = e => {
  //   e.preventDefault();

  //   const newRecipe = {
  //     name: this.state.name
  //   };

  //   // Add recipe via postRecipe action
  //   this.props.postRecipe(newRecipe);
  // };

  render() {
    return (
      <Container>
        {/* Header */}
        <Header>
          <Body>
            <Title>Add</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(mapStateToProps, { postRecipe })(AddRecipeScreen);
