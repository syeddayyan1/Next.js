const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain p-5"
      />

      <div className="p-5">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">
          {product.title}
        </h2>

        <p className="text-gray-700 mb-3">
          {product.category}
        </p>

        <p className="text-xl font-bold text-gray-800">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;