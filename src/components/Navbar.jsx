"use client";

import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const authCookie = cookies.find((c) => c.startsWith("auth="));
    setIsLogged(authCookie?.split("=")[1] === "true");
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=false;";
    setIsLogged(false);
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "Products", href: "/products" },
    { label: "Add Products", href: "/add-product" },
    { label: "Register", href: "/register" },
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
            <ul className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 shadow rounded-box">
              {links.map((link, i) => (
                <li key={i}>
                  <NavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink link={link} />
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {isLogged ? (
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
