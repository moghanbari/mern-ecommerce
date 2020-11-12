export const initialCartItems = () => {
  const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  const cartItems = cartItemsFromLocalStorage
    ? JSON.parse(cartItemsFromLocalStorage)
    : []

  return cartItems
}
