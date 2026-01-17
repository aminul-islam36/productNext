import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGit,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">ProductNest</h2>
          <p className="text-gray-600">
            Explore and manage products effortlessly with ProductNest — a modern
            platform for all your product needs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-primary">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-primary">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/aminul-islam36"
              target="_blank"
              className="hover:text-primary"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://github.com/aminul-islam36"
              target="_blank"
              className="hover:text-primary"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://github.com/aminul-islam36"
              target="_blank"
              className="hover:text-primary"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aminul-islam36"
              target="_blank"
              className="hover:text-primary"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ProductNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
