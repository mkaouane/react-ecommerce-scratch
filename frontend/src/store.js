import {createStore, combineReducers} from 'redux';
import Product from './components/Product';

const initialState = {};
const reducer = combineReducers({
    productList: ProductListReducer,
})
const store = createStore(reducer,initialState)