import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  );

  const products = await response.json();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;