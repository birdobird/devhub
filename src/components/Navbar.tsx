"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Define nav items outside the component to prevent recreation on re-renders
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Developers', href: '/devs' },
  { name: 'About', href: '/about' },
];

// Create a client-side only version of the Navbar with dynamic import
const DynamicNavbar = dynamic(() => Promise.resolve(NavbarClient), {
  ssr: false,
  loading: () => (
    <header className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              DevHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  ),
});

// The actual Navbar component that will only render on the client
function NavbarClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const Menu = dynamic(() => import('lucide-react').then(mod => mod.Menu), { ssr: false });
  const X = dynamic(() => import('lucide-react').then(mod => mod.X), { ssr: false });

  return (
    <header className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              DevHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-neutral-700 hover:text-white rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// Export the dynamic Navbar component
export default DynamicNavbar;
