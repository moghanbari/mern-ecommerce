import { CART_ADD_ITEM } from '../../types/redux/actionTypes'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newCartItem = action.payload

      const existedCartItem = state.cartItems.find(
        (cartItem) => cartItem.product === newCartItem.product
      )

      if (existedCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existedCartItem.product
              ? newCartItem
              : cartItem
          ),
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem],
      }
    default:
      return state
  }
}
