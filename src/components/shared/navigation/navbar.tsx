"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "_hello", href: "/" },
  { name: "_about me", href: "/about_me" },
  { name: "_skills", href: "/skills" },
  { name: "_projects", href: "/projects" },
  { name: "_contact", href: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("_hello");

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-gray-400">
      <div className="flex items-center space-x-2 p-5">
        <div className="w-4 h-4 rounded-full bg-[#ff6b6b]"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
      </div>
      <div className="border-t-2 border-b-2 border-[#0a0a0a]">
        <ul className="flex flex-wrap -mt-px text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span
                  className={`text-md inline-block py-3 px-8 lg:px-16  border-r-2 border-black cursor-pointer ${
                    active === item.name
                      ? "text-[#f0b65a] border-t border-t-[#ff6b6b]"
                      : "border-t border-black"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
