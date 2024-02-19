import React from "react";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
    { href: "/patch", label: "Patch Notes" },
  ];
  return (
    <nav className="bg-amber-100">
      <ul className="flex space-x-6 border-b mb-5 p-2 px-5">
        {links.map((link) => (
          <Link
            key={link.href}
            className="hover:text-zinc-700 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
