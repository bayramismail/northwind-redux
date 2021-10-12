import * as actionsTypes from "./actionsTypes"

export function addToCart(cartItem){
return {type:actionsTypes.ADD_TO_CART,payload:cartItem}
}
export function removeFromCart(product){
    return {type:actionsTypes.REMOVE_FROM_CART,payload:product}
    }