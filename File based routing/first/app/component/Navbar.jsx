import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">

        <div className="logo">
          Nexora
        </div>

        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/login" className="navButton">
          Get Started
        </Link>

      </div>
    </header>
  );
};

export default Navbar;