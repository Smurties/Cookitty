import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  recipes: recipeReducer,
  error: errorReducer
});
