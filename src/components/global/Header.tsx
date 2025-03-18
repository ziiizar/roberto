'use client'

import { Button } from "../ui/Button";
import { Logo } from "../ui/icons";
import SpecialButton from "../ui/SpecialButton";
import ThemeToggle from "./ThemeToggler";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex h-16 sm:h-18 md:h-20 justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-2 text-foreground dark:text-dark-foreground relative">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
        <Logo />
        <div className="hidden md:flex gap-2">
         <ThemeToggle />
        </div>
        {/* <h3 className="hidden sm:block text-sm md:text-base text-foreground dark:text-dark-foreground">Product page</h3> */}
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden z-20" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-4 lg:gap-8 items-center">
        {/* <select name="" id="" className="p-2 rounded-md text-sm">
          <option value="">English</option>
        </select> */}
        <Button>Login</Button>
        <SpecialButton>Signup</SpecialButton>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-background dark:bg-dark-background z-10 flex flex-col pt-20 px-4 gap-6">
          <h3 className="text-base">Product page</h3>
          <div className="flex justify-center my-4">
            <ThemeToggle />
          </div>
          <select name="" id="" className="p-2 rounded-md w-full">
            <option value="">English</option>
          </select>
          <Button size="full">Login</Button>
          <SpecialButton className="w-full">Signup</SpecialButton>
        </div>
      )}
    </header>
  );
};

export default Header;