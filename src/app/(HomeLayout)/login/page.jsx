"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

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
      // Set auth cookie with environment-specific security
      const isProduction = process.env.NODE_ENV === "production";
      const cookieString = isProduction
        ? "auth=true; path=/; max-age=86400; SameSite=Lax; Secure"
        : "auth=true; path=/; max-age=86400; SameSite=Lax";

      document.cookie = cookieString;

      // Notify Navbar instantly
      window.dispatchEvent(new Event("authChange"));

      Swal.fire({
        icon: "success",
        title: "Logged in successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      // Wait for cookie to be set and success message, then redirect
      setTimeout(() => {
        const redirect = searchParams.get("callBackUrl") || "/add-product";

        // Verify cookie was actually set before redirecting
        const cookieCheck = document.cookie.includes("auth=true");
        if (!cookieCheck) {
          console.error("Cookie was not set properly");
          Swal.fire({
            icon: "error",
            title: "Login failed",
            text: "Please try again",
          });
          return;
        }

        console.log("Redirecting to:", redirect);

        // Use different redirect methods for production vs development
        if (isProduction) {
          // In production (Vercel), use window.location for reliable redirects
          window.location.href = redirect;
        } else {
          // In development, use Next.js router
          router.push(redirect);
        }
      }, 1600);
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
        <p className="mt-3">
          Don't have an account?{" "}
          <Link href="register" className="text-blue-500">
            register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
