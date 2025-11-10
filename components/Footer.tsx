import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              Code<span className="text-green-400">Valley</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Empowering Africa’s Future Through Smart, Inclusive Technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon href="#">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.84C20.33,8.63 20.33,8.42 20.32,8.21C21.17,7.63 21.88,6.87 22.46,6Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3M8.5,18H6V9H8.5V18M7.25,7.5A1.25,1.25 0 0,1 6,6.25A1.25,1.25 0 0,1 7.25,5A1.25,1.25 0 0,1 8.5,6.25A1.25,1.25 0 0,1 7.25,7.5M18.5,18H16V13.5C16,12.5 15.75,11.75 14.75,11.75C13.75,11.75 13.25,12.5 13.25,13.5V18H10.75V9H13.25V10.25C13.75,9.25 14.75,8.75 15.75,8.75C17.75,8.75 18.5,10.25 18.5,12.5V18Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:CodeValley@gmail.com"
                  className="hover:text-green-400"
                >
                  CodeValley@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2348083863526" className="hover:text-green-400">
                  +234 808 386 3526
                </a>
              </li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Join Our Newsletter
            </h3>
            <p className="mt-4 text-gray-400">
              Stay updated with our latest developments.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-r-md hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          &copy; {new Date().getFullYear()} CodeValley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
