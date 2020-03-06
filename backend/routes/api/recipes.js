const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Recipe Model
const Recipe = require('../../models/Recipe');

/**
 * @api {get} /recipes Get all recipes
 * @apiName getRecipe
 * @apiGroup Recipes
 *
 * @apiVersion 1.0.0
 *
 * @apiParamExample Example Body
 *
 * {
 *
 * }
 *
 * @apiSuccess {Object} Recipe Recipe object
 *
 * @apiSuccessExample Successful Response
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 * }
 */
// @route   GET api/recipes
// @desc    Get all most recent recipes
// @access  Public
router.get('/', (req, res) => {
  Recipe.find()
    .sort({ date: -1 })
    .then(recipes => {
      res.json(recipes);
    });
});

/**
 * @api {post} /recipes Post a recipe
 * @apiName postRecipe
 * @apiGroup Recipes
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} Name Name of Recipe
 * @apiParam {Object} Details Contains additional details about recipe
 * @apiParam {Array} Ingredients An array of ingredients
 * @apiParam {Array} Steps An array of steps
 *
 * @apiParamExample Example Body
 *
 * {
 *
 * }
 *
 * @apiSuccess {Number} id Recipe id
 *
 * @apiSuccessExample Successful Response
 *
 * HTTP/1.1 200 OK
 *
 * {
 *
 * }
 */
// @route   POST api/recipes
// @desc    Create a recipe
// @access  Private
router.post('/', auth, (req, res) => {
  const { name, details, ingredients, steps } = req.body;
  const newRecipe = new Recipe({
    name,
    details,
    ingredients,
    steps,
    author: req.user.id
  });

  newRecipe.save().then(recipe => res.json(recipe));
});

/**
 * @api {delete} /recipes/:id Delete a recipe
 * @apiName deleteRecipe
 * @apiGroup Recipes
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Recipe id
 *
 * @apiSuccessExample Successful Response
 * HTTP/1.1 200 OK
 * {
 *
 * }
 */
// @route   DELETE api/recipes/:id
// @desc    Delete a recipe
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
