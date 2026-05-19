import toast from "react-hot-toast"
import { useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../context/CartContext"

function ProductCard(props) {

  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-105 hover:shadow-2xl duration-300">

      <img
        src={props.image}
        alt=""
        className="w-full h-80 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-semibold">
          {props.name}
        </h2>

        <p className="text-pink-600 text-xl font-bold mt-2">
          ₹ {props.price}
        </p>

        <div className="flex gap-3 mt-5">

          <button
           onClick={() => {

           addToCart(props)

           toast.success("Added To Cart")

         }}
            className="bg-pink-600 text-white px-5 py-3 rounded-2xl w-full hover:bg-pink-700 hover:scale-105 duration-300"
          >
            Add To Cart
          </button>

          <Link
            to={`/product/${props.id}`}
            className="bg-black text-white px-5 py-3 rounded-2xl"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ProductCard