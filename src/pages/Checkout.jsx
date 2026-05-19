import { useContext } from "react"

import { CartContext } from "../context/CartContext"

function Checkout() {

  const { cartItems } = useContext(CartContext)

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-white p-8 rounded-3xl shadow-md">

          <h2 className="text-3xl font-bold mb-6">
            Delivery Details
          </h2>

          <div className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-4 rounded-2xl"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-4 rounded-2xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-4 rounded-2xl"
            />

            <textarea
              placeholder="Delivery Address"
              className="border p-4 rounded-2xl h-32"
            />

          </div>

        </div>

        <div className="bg-black text-white p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-8">
            Order Summary
          </h2>

          <div className="space-y-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex justify-between"
              >

                <span>
                  {item.name} x {item.quantity}
                </span>

                <span>
                  ₹ {item.price * item.quantity}
                </span>

              </div>

            ))}

          </div>

          <hr className="my-8" />

          <h2 className="text-4xl font-bold">
            Total: ₹ {totalPrice}
          </h2>

          <button
            className="mt-10 bg-pink-600 px-8 py-4 rounded-2xl w-full text-lg hover:bg-pink-700 duration-300"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default Checkout