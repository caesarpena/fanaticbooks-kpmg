import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import CategoriesReducer from './reducer_categories';
import SubcategoriesReducer from './reducer_subcategories';
import TrendingReducer from './reducer_trending';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  subcategories: SubcategoriesReducer,
  trending: TrendingReducer,
  form: formReducer
});

export default rootReducer;
