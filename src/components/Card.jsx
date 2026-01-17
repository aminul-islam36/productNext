"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <figure>
            <Image
              width={40}
              height={40}
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h3 className="card-title">{product.name.slice(0, 25)}...</h3>
            <p className="text-gray-600">
              {product.description.slice(0, 60)} ...
            </p>
            <p className="text-primary font-semibold">$ {product.price}</p>

            <div className="card-actions justify-end">
              <Link
                href={`/products/${product.id}`}
                className="btn btn-outline btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
