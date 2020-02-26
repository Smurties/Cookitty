import {
  GET_RECIPES,
  POST_RECIPE,
  DELETE_RECIPE,
  RECIPES_LOADING
} from '../actions/types';

const initialState = {
  recipes: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, loading: false };
    case POST_RECIPE:
      return { ...state, recipes: [action.payload, ...state.recipes] };
    case RECIPES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
