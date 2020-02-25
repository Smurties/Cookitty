import {
  GET_RECIPES,
  POST_RECIPE,
  DELETE_RECIPE,
  RECIPES_LOADING
} from './types';

export const getRecipes = () => dispatch => {
  dispatch(setRecipesLoading());
  axios.get('/api/recipes').then(res =>
    dispatch({
      type: GET_RECIPES,
      payload: res.data
    })
  );
};

export const postRecipe = recipe => dispatch => {
  axios
    .post('/api/recipes', recipe)
    .then(res => dispatch({ type: POST_RECIPE, payload: res.data }));
};

export const setRecipesLoading = () => {
  return {
    type: RECIPES_LOADING
  };
};
