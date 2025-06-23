'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '#about', name: 'About' },
  { path: '#contact', name: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="relative mt-[-7px]  z-[1000]">
      <div className="flex items-center justify-between p-4 bg-[#003888]/50 text-white shadow-md rounded-xl m-2">
          <Image src="/amar.png" alt="logo" width={48} height={45} className="rounded-full ms-2" />
        <div className="flex text-center mx-auto items-center gap-2">
          <h1 className="text-2xl ms-12 font-bold">Amar Ali</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-6 text-sm font-semibold">
          {navItems.map(({ path, name }) => (
            <li key={name}>
              <Link
                href={path}  
                className="px-4 py-3 rounded-md transition-all duration-200 hover:bg-[#003888]/100 hover:text-white"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button className="sm:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-2/3 h-full bg-white text-[#003888] shadow-lg flex flex-col p-4 gap-4 sm:hidden transition-transform duration-300"
        >
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold ms-3">Menu</p>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-base">
            {navItems.map(({ path, name }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="px-4 py-2 rounded-md transition-all duration-200 hover:bg-[#003888]/100 hover:text-white"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
