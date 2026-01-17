import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
