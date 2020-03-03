const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Recipe Model
const Recipe = require('../../models/Recipe');

// @route   GET api/recipes
// @desc    Get all recipes
// @access  Public
/**
 * @api {get} /recipes Get all recipes
 * @apiName getRecipes
 * @apiGroup Recipes
 */
router.get('/', (req, res) => {
  Recipe.find()
    .sort({ date: -1 })
    .then(recipes => {
      res.json(recipes);
    });
});

// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', auth, (req, res) => {
  const newRecipe = new Recipe({ name: req.body.name });

  newRecipe.save().then(recipe => res.json(recipe));
});

// @route   DELETE api/recipes/:id
// @desc    Delete a recipe
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
