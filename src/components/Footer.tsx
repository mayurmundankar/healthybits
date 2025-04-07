import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* <div>
            <h3 className="text-xl font-bold mb-4">HealthyBits</h3>
            <p className="text-gray-400">Bringing healthy snacking to your doorstep.</p>
          </div> */}
          <div className="flex items-start gap-6">
            <img
              src="/Logo.png"
              alt="Healthy Bits Logo"
              className="h-[120px] w-[120px]"
            />
            <div>
              <h3 className="text-xl font-bold mb-4">HealthyBits</h3>
              <p className="text-gray-400">Bringing healthy snacking to your doorstep.</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Shop', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-orange-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Youtube />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Certifications</h4>
            <p className="text-gray-400">FSSAI Lic No: 21525080000288</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HealthyBits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}