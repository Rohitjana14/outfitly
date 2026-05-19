import { useState } from "react"

import { motion } from "framer-motion"

import ProductCard from "../components/ProductCard"

import products from "../data/products"

function Home() {

  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (

    <div className="relative overflow-hidden min-h-screen">

      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-[120px] opacity-40"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-5 text-center text-2xl font-bold animate-pulse relative z-10"
      >

        🔥 SUMMER SALE IS LIVE — UP TO 70% OFF 🔥

      </motion.div>

      <section className="text-center py-28 px-10 relative z-10">

        <motion.h1
          initial={{
            scale: 0.8,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{ duration: 1 }}
          className="text-7xl font-black leading-tight"
        >

          Discover Your
          <span className="text-pink-600">
            {" "}Fashion{" "}
          </span>
          Style

        </motion.h1>

        <p className="text-gray-600 text-2xl mt-8">

          Premium Fashion For Men & Women

        </p>

        <div className="flex justify-center gap-5 mt-10">

          <button className="bg-pink-600 text-white px-10 py-4 rounded-3xl text-xl hover:scale-110 duration-300 shadow-xl">

            Shop Now

          </button>

          <button className="bg-black text-white px-10 py-4 rounded-3xl text-xl hover:scale-110 duration-300 shadow-xl">

            Explore

          </button>

        </div>

      </section>

      <div className="px-10 relative z-10">

        <input
          type="text"
          placeholder="Search premium products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-5 rounded-3xl border border-gray-300 shadow-md text-lg"
        />

      </div>

      <section className="p-10 relative z-10">

        <h2 className="text-5xl font-bold mb-10 text-center">

          Trending Collection

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.map((product) => (

            <motion.div
              key={product.id}
              whileHover={{
                scale: 1.05
              }}
            >

              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />

            </motion.div>

          ))}

        </div>

      </section>

    </div>

  )
}

export default Home