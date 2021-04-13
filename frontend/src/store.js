import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import Product from './components/Product';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from "./reducers/cartReducers";
import thunk from 'redux-thunk'

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;