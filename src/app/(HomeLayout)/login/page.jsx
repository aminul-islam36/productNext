"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials
  const validEmail = "admin@gmail.com";
  const validPassword = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({ icon: "error", title: "Enter email & password" });
      return;
    }

    if (email === validEmail && password === validPassword) {
      (document.cookie = "auth=true; path=/"),
        Swal.fire({
          icon: "success",
          title: "Logged in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

      router.push("/add-product"); // redirect to items page
    } else {
      Swal.fire({ icon: "error", title: "Invalid email or password" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-6">
      <div className="max-w-md w-full bg-base-100 p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to ProductNest
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@productnest.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
