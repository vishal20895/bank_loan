import React from "react";
import logo from "../assets/logo.svg"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo and Address */}
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="w-32" />
          <p className="text-gray-400 text-sm">
            123 Main Street, City, Country <br />
            Phone: +123 456 7890 <br />
            Email: info@example.com
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Link</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-semibold mb-4">Partner</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Reseller</a></li>
            <li><a href="#">Collaborate</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
