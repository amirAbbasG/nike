import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-4">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray mt-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
