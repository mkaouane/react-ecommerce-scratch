import axios from "axios"
import {CART_ADD_ITEM} from '../constants/cartConstants'

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const {data} = await axios.get("/api/product/"+productId)
        dispatch({
            type: CART_ADD_ITEM, payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            brand: data.brand,
            countInStock: data.countInStock,
            qty
        }})
    } catch (error) {
        
    }
}
export {addToCart}