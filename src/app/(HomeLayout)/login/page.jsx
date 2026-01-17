"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Enter email & password",
      });
      return;
    }

    if (email === "admin@gmail.com" && password === "1234") {
      // 1️⃣ Set auth cookie
      document.cookie =
        "auth=true; path=/; max-age=86400; SameSite=Lax; Secure";

      // 2️⃣ Notify Navbar instantly
      window.dispatchEvent(new Event("authChange"));

      Swal.fire({
        icon: "success",
        title: "Logged in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });

      // 3️⃣ Redirect back (middleware aware)
      const redirect = searchParams.get("callBackUrl") || "/";
      router.push(redirect);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid email or password",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
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
              placeholder="admin@gmail.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="1234"
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
