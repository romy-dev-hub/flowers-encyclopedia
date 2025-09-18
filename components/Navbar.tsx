"use client";

import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-pink-dark font-serif text-2xl font-bold">
          <FaLeaf className="text-green-soft" />
          Flowers
        </Link>

        {/* Links */}
        <div className="flex gap-6 font-sans text-gray-700">
          <Link href="/flowers" className="hover:text-pink-dark">Flowers</Link>
          <Link href="/seasons" className="hover:text-pink-dark">Seasons</Link>
          <Link href="/meanings" className="hover:text-pink-dark">Meanings</Link>
          <Link href="/care" className="hover:text-pink-dark">Care</Link>
          <Link href="/gallery" className="hover:text-pink-dark">Gallery</Link>
          <Link href="/about" className="hover:text-pink-dark">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className = "md:hidden text-pink-800 focus:outline-none" 
          onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-soft rounded-lg p-4 absolute top-full left-0 right-0">
            <Link href="/flowers" className="block py-2 hover:text-pink-dark">Flowers</Link>
            <Link href="/seasons" className="block py-2 hover:text-pink-dark">Seasons</Link>
            <Link href="/meanings" className="block py-2 hover:text-pink-dark">Meanings</Link>
            <Link href="/care" className="block py-2 hover:text-pink-dark">Care</Link>
            <Link href="/gallery" className="block py-2 hover:text-pink-dark">Gallery</Link>
            <Link href="/about" className="block py-2 hover:text-pink-dark">About</Link>
          </div>
        )}
    </nav>
  );
}
