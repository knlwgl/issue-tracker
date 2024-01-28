import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul className="space-x-6 border-b mb-5 p-2 px-5">
        <Link href="/">Dashboard</Link>
        <Link href="/issues">Issues</Link>
        <Link href="/about">About</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
