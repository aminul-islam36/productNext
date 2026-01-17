"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <Link
      className={`py-2 px-3 ${isActive && "bg-amber-300"}`}
      href={`${link.href}`}
    >
      {link.label}
    </Link>
  );
};

export default NavLink;
