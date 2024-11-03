import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="font-display text-xl">Blissful Existence</span>
            </Link>
            <p className="mt-4 text-primary-200">
              Transformative healing through nature and equine connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/healing-herd" className="text-primary-200 hover:text-white transition-colors">Our Herd</Link></li>
              <li><Link to="/booking" className="text-primary-200 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-200">
              <li>123 Healing Path</li>
              <li>Serenity Valley, CA 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@blissfulexistence.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg mb-4">Stay Connected</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-primary-700 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-primary-700">
          <div className="flex justify-between items-center">
            <p className="text-primary-300">© 2024 Blissful Existence Healing Acres. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;