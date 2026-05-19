import { useParams } from "react-router-dom"
import { useContext } from "react"

import products from "../data/products"

import { CartContext } from "../context/CartContext"

function ProductDetails() {

  const { id } = useParams()

  const { addToCart } = useContext(CartContext)

  const product = products.find(
    (item) => item.id === Number(id)
  )

  return (
    <div className="p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-10 rounded-3xl shadow-md">

        <img
          src={product.image}
          alt=""
          className="w-full h-[600px] object-cover rounded-3xl"
        />

        <div>

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-pink-600 text-3xl font-bold mt-6">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 text-lg mt-6">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-10 bg-pink-600 text-white px-8 py-4 rounded-2xl text-lg hover:bg-pink-700 duration-300"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails