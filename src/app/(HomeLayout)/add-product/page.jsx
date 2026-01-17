"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const AddProduct = () => {
  // Handle form submission
  const { register, handleSubmit, reset } = useForm();
  const handleProduct = async (data) => {
    const file = data.file[0];
    const formData = new FormData();
    formData.append("image", file);

    const imgbbRes = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_BB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const imgbbData = await imgbbRes.json();

    if (!imgbbData.success) {
      Swal.fire({ icon: "error", title: "Image upload failed" });
      return;
    }

    const imageUrl = imgbbData.data.url; // this is your image URL

    const newProduct = {
      name: data.name,
      image: imageUrl,
      description: data.description,
      price: Number(data.price),
    };
    console.log(newProduct);

    try {
      // Replace URL with your Express API endpoint
      const res = await fetch(
        "https://product-next-server.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (res.ok) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Product added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to add product",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Product</h2>
      <form
        className="space-y-6 border p-8 border-gray-200 rounded-2xl"
        onSubmit={handleSubmit(handleProduct)}
      >
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            {...register("name")}
            className="input w-full"
            placeholder="Enter product name"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input />
          <input
            {...register("file")}
            type="file"
            className="file-input w-full"
            placeholder="Enter image URL"
          />
        </div>
        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            {...register("price")}
            className="input w-full"
            placeholder="Enter product price"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            {...register("description")}
            className="textarea w-full"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
