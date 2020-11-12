import { CART_ADD_ITEM } from '../../types/redux/actionTypes'
import axios from 'axios'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const state = getState()

  let product = {}

  const productDetailsInState =
    state.productDetails.product &&
    state.productDetails.product._id &&
    state.productDetails.product._id === productId
      ? state.productDetails.product
      : false

  if (productDetailsInState) {
    product = productDetailsInState
  } else {
    const { data } = await axios.get(`/api/products/${productId}`)
    product = data
  }

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

  const cartItemsInState = getState().cart.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItemsInState))
}
