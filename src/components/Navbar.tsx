import { useState } from 'react';
import { Menu, X, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './HBlogo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Apple className="h-8 w-8 text-orange-400" />
            <span className="text-2xl font-bold text-orange-400">
              HealthyBits
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About Us', 'Shop', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={
                  item === 'Home'
                    ? '/'
                    : `/${item.toLowerCase().replace(' ', '-')}`
                }
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {['Home', 'About Us', 'Shop', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={
                  item === 'Home'
                    ? '/'
                    : `/${item.toLowerCase().replace(' ', '-')}`
                }
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
