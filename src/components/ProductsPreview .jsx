"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./Card";

const ProductsPreview = () => {
  // Temporary static data (later replace with API fetch)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Express API
    fetch("https://product-next-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold">
            Explore Products on{" "}
            <span className="text-primary">ProductNest</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Discover a curated selection of products with clear details and
            transparent pricing — all in one place.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
