import { CART_ADD_ITEM } from '../../types/redux/actionTypes'
import axios from 'axios'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const state = getState()

  let product = {}

  const productDetailsInState = state.productDetails

  if (productDetailsInState) {
    product = productDetailsInState
  } else {
    const { data } = await axios.get(`/api/products/${productId}`)
    product = data
  }

  const cart = state.cart

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItem', JSON.stringify(cart.cartItems))
}
