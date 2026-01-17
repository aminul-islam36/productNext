"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;

  // Dummy products

  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    // Fetch products from backend
    const fetchProduct = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");
        const data = await res.json();

        // Find the product with the matching id
        const selected = data.find((p) => p.id === parseInt(id));
        setProduct(selected);
      } catch (err) {
        console.error(err);
      } finally {
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center py-32">
        <p className="text-gray-600">Product not found.</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-primary font-semibold text-2xl mb-4">
            {product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4">
            <button className="btn btn-primary">Add to Cart</button>
            <Link href={"/products"} className="btn btn-outline btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
