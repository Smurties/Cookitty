import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { List } from 'native-base';
import RecipeItem from "./RecipeItem"
import { Divider } from "react-native-elements";


class RecipeList extends Component {
    constructor(props) {
        super(props);
    }

    getRecipe() {
        let recipes = [];
        this.props.recipes.map((recipe, index) => {
            recipes.unshift(
                <TouchableOpacity
                    key={index}
                    // onPress={this.viewRecipe.bind(this, index, badge)}
                >
                        <RecipeItem
                            recipeTitle={recipe.recipeTitle}
                            level={recipe.level}
                            user={recipe.user}
                            description={recipe.description}
                        
                        />
                        <Divider style={{ marginHorizontal: 10 }}/>
                </TouchableOpacity>
                    

            );
            
        });
        return recipes;
    }

    render() {
        return (
            <List>
                {this.getRecipe()}
            </List>
        );
    }
}

export default RecipeList;

