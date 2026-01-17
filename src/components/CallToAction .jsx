"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const CallToAction = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      Swal.fire({ icon: "error", title: "Please enter your name and email!" });
      return;
    }

    // You can handle API call here to send data to your backend
    Swal.fire({
      icon: "success",
      title: `Thank you, ${formData.name}! We received your contact info.`,
      showConfirmButton: false,
      timer: 1500,
    });

    setFormData({ name: "", email: "" }); // reset form
  };

  return (
    <section className="bg-primary py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Contact Us
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Have questions or feedback? Drop your info below and we’ll get back to
          you!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input w-full sm:w-1/2 flex-1"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input w-full sm:w-1/2 flex-1"
          />
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
