"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import NavLink from "./NavLink";
import Swal from "sweetalert2";

const Navbar = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    // initial check
    const syncAuth = () => {
      setLogged(document.cookie.includes("auth=true"));
    };

    syncAuth();

    // listen for login / logout
    window.addEventListener("authChange", syncAuth);

    return () => {
      window.removeEventListener("authChange", syncAuth);
    };
  }, []);

  const handleLogout = () => {
    document.cookie =
      "auth=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure";

    // notify navbar instantly
    window.dispatchEvent(new Event("authChange"));
    Swal.fire({
      icon: "success",
      title: "Logout successfully!",
      showConfirmButton: false,
      timer: 1200,
    });
  };
  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Add Products", href: "/add-product" },
    ...(!logged ? [{ label: "Register", href: "/register" }] : []),
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <IoMdMenu />
            </div>
          </div>

          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-38 max-h-7 h-auto"
            />
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <NavLink key={index} link={link}></NavLink>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {logged ? (
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn btn-outline btn-success">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
