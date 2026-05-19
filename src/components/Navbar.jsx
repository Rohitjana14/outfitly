import { Link } from "react-router-dom"

import {
  useContext,
  useState,
  useEffect
} from "react"

import { motion } from "framer-motion"

import {
  FaShoppingCart,
  FaUser,
  FaMoon,
  FaSun
} from "react-icons/fa"

import { CartContext } from "../context/CartContext"

import logo from "../assets/logo.png"

function Navbar() {

  const { cartItems } = useContext(CartContext)

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if (darkMode) {

      document.body.style.background =
        "#0f172a"

      document.body.style.color =
        "white"

    } else {

      document.body.style.background =
        "#f5f5f5"

      document.body.style.color =
        "black"

    }

  }, [darkMode])

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md px-8 py-4 flex items-center justify-between sticky top-0 z-50"
    >

      <div className="flex items-center gap-4">

        <img
          src={logo}
          alt="logo"
          className="w-14 h-14 rounded-full object-cover"
        />

        <h1 className="text-4xl font-bold text-pink-600">
          Outfitly
        </h1>

      </div>

      <div className="flex gap-6 text-lg items-center">

        <Link
          to="/"
          className="hover:text-pink-600 duration-300"
        >
          Home
        </Link>

        <Link
          to="/shop"
          className="hover:text-pink-600 duration-300"
        >
          Shop
        </Link>

        <Link
          to="/cart"
          className="hover:text-pink-600 duration-300 flex items-center gap-2"
        >
          <FaShoppingCart />
          Cart ({cartItems.length})
        </Link>

        <Link
          to="/login"
          className="hover:text-pink-600 duration-300 flex items-center gap-2"
        >
          <FaUser />
          Login
        </Link>

        <Link
          to="/register"
          className="bg-pink-600 text-white px-5 py-2 rounded-2xl hover:bg-pink-700 duration-300"
        >
          Register
        </Link>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="bg-black text-white px-4 py-2 rounded-xl"
        >

          {darkMode ? <FaSun /> : <FaMoon />}

        </button>

      </div>

    </motion.nav>

  )
}

export default Navbar