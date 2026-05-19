import products from "../data/products"

import ProductCard from "../components/ProductCard"

function Shop() {

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-10">
        Shop Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />

        ))}

      </div>

    </div>
  )
}

export default Shop