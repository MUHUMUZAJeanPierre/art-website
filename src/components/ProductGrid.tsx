// import { products } from "../components/data/products";

// const ProductGrid: React.FC = () => {
//   return (
//     <section className="py-12 px-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((p, idx) => (
//           <div key={idx} className="bg-white shadow rounded-xl overflow-hidden">
//             <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
//               <p className="text-green-700 font-medium">${p.price}</p>
//               <button className="w-full mt-3 bg-green-800 text-white py-2 rounded-lg font-medium hover:bg-green-900">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;


import { products } from "../components/data/products";
import { useLocation } from "react-router-dom";

const ProductGrid: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search")?.toLowerCase() || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="bg-white shadow rounded-xl overflow-hidden">
              <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-green-700 font-medium">${p.price}</p>
                <button className="w-full mt-3 bg-green-800 text-white py-2 rounded-lg font-medium hover:bg-green-900">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
