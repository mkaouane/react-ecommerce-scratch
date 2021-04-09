import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import Product from './components/Product';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk'

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;