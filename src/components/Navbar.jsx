"use client";
import Link from "next/link";
import { X, AlignJustify } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const navLinks = ["Download", "Metrics", "Buy NFT", "Follow"];
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
    }
    return () => document.removeEventListener("mousedown", closeMenu);
  }, [isOpen]);

  return (
    <div className="container flex items-center justify-between px-2.5 h-25 max-sm:py-4 mx-auto font-medium funnel-font">
      <Link href="/" className="text-4xl max-sm:text-2xl">
        LOGO
      </Link>
      <div className="flex items-center gap-6 max-sm:hidden">
        {navLinks.map((link) => (
          <Link
            key={link}
            href="/"
            className="px-2.5 text-gray-900 hover:text-white transition duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
      <div className="relative sm:hidden " onClick={toggleMenu}>
        <div className="flex items-center justify-center rounded-full bg-dark-200 w-11 h-9 hover:cursor-pointer">
          <AlignJustify className="w-4" />
        </div>
        <div
          ref={menuRef}
          className={`fixed top-15 h-max w-64 right-0 pr-2.5  shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 p-3 menu-border bg-dark-200">
            <div className="flex flex-col gap-2 px-1 py-4 bg-dark-100 rounded-xl">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="/"
                  className="px-2.5 py-1.5 text-gray-900 hover:text-white transition duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
            <div
              className="flex py-2.5 px-4 bg-dark-100 gap-28 rounded-xl cursor-pointer"
              onClick={toggleMenu}
            >
              <span>Close</span>
              <div className="flex items-center justify-center rounded-full bg-dark-200 w-11 h-9">
                <X className="w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
