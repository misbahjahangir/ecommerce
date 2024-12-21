import React from "react";
import Image from "next/image"
import shop from '../../public/shop1.png'
import view from '../../public/view.png'


const TrendingProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/trend1.svg" },
    { id: 2, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/trend2.svg" },
    { id: 3, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/trend3.svg" },
    { id: 4, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/trend4.svg"},
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-2 shadow-lg text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500">
                <span className="text-pink-500">{product.price}</span> <span className="line-through">{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl">23% off in all products</p>
            <button className="text-pink-500 underline mt-2">Shop Now</button>
            <Image src={shop} alt='shop-pic' />
          </div>
          <div className="bg-pink-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl">23% off in all products</p>
            <button className="text-pink-500 underline mt-2">View Collection</button>
            < Image src={view} alt='view-pic' />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;