import { useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../context/CartContext"

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext)

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="bg-white p-5 rounded-3xl shadow-md"
          >

            <img
              src={item.image}
              alt=""
              className="w-full h-72 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-semibold mt-4">
              {item.name}
            </h2>

            <p className="text-pink-600 text-xl font-bold mt-2">
              ₹ {item.price}
            </p>

            <div className="flex items-center gap-4 mt-5">

              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-200 px-4 py-2 rounded-xl"
              >
                -
              </button>

              <span className="text-xl font-bold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-gray-200 px-4 py-2 rounded-xl"
              >
                +
              </button>

            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-5 bg-red-500 text-white px-5 py-3 rounded-2xl w-full hover:bg-red-600 duration-300"
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      <div className="mt-10 bg-black text-white p-8 rounded-3xl">

        <h2 className="text-4xl font-bold">
          Total: ₹ {totalPrice}
        </h2>

        <Link to="/checkout">

          <button className="mt-6 bg-pink-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-pink-700 duration-300 w-full">

            Proceed To Checkout

          </button>

        </Link>

      </div>

    </div>
  )
}

export default Cart