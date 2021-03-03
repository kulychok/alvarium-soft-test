import { combineReducers, createStore } from 'redux';
import { productReducer } from './reducers/productReducer';
import { filterReducer } from './reducers/filterReducer';

const reducers = combineReducers({
	filtersComponent: filterReducer,
	productsComponent: productReducer,
});

const store = createStore(reducers);

export default store;
