import { useState } from "react"

import { useNavigate } from "react-router-dom"

import {
  signInWithEmailAndPassword
} from "firebase/auth"

import toast from "react-hot-toast"

import { motion } from "framer-motion"

import { auth } from "../firebase"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      toast.success("Login Successful")

      navigate("/")

    } catch (error) {

      toast.error(error.message)

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">

      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-3xl shadow-2xl w-[400px] relative z-10"
      >

        <h1 className="text-5xl font-black text-center mb-10 text-pink-600">
          Login
        </h1>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="border border-gray-300 p-4 rounded-2xl outline-none focus:border-pink-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="border border-gray-300 p-4 rounded-2xl outline-none focus:border-pink-500"
          />

          <button
            className="bg-pink-600 text-white py-4 rounded-2xl text-lg hover:bg-pink-700 hover:scale-105 duration-300"
          >
            Login
          </button>

        </div>

      </motion.form>

    </div>

  )
}

export default Login