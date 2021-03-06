import {CART_ADD_ITEM} from '../constants/cartConstants'

function cartReducer(state={cartItems: []}, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x=> x.id ===item.product)
            if (product) {
                return {...state, cartItems:
                    state.cartItems.map(x=>x.product === product.product?product: x )
                }
                
            }
            return {...state, cartitems: [...state.cartitems, item]}
            default:
              return state
    }
}

export { cartReducer };