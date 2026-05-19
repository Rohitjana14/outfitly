import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("cartItems")

    return savedCart ? JSON.parse(savedCart) : []

  })

  const addToCart = (product) => {

    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      const updatedCart = cartItems.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )

      setCartItems(updatedCart)

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ])

    }

  }

  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    )

    setCartItems(updatedCart)

  }

  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    )

    setCartItems(updatedCart)

  }

  const decreaseQuantity = (id) => {

    const updatedCart = cartItems
      .map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0)

    setCartItems(updatedCart)

  }

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    )

  }, [cartItems])

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
      }}
    >

      {children}

    </CartContext.Provider>

  )
}

export default CartProvider