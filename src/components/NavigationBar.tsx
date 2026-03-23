/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Link from "next/link";
import {
  House,
  Mail,
  MapPin,
  Palette,
  Menu,
  X,
  Handshake,
  Newspaper,
} from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BsPeople } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";

export function NavigationBar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <img src="/sitstop-logo.jpg" alt="SIT STOP logo" className="h-10" />
            <span className="hidden sm:inline">SIT STOP</span>
          </Link>

          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/">
                      <span className="flex items-center gap-2 font-bold">
                        <House className="w-4 h-4" />
                        Home
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/locations">
                      <span className="flex items-center gap-2 font-bold">
                        <MapPin className="w-4 h-4" />
                        Locations
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/#about" className="flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        <BsPeople className="w-4 h-4" />
                        About Us
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/#logo" className="flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        <HiOutlineSparkles className="w-4 h-4" />
                        Logo
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/#join" className="flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        <Handshake className="w-4 h-4" />
                        Join
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <span className="flex items-center gap-2">
                      <Link href="/#faqs" className="flex items-center gap-2">
                        <FiHelpCircle className="w-4 h-4" />
                        FAQs
                      </Link>
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <span className="flex items-center gap-2">
                      <Link
                        href="/#contact"
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Contact
                      </Link>
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <>
                <X className="w-6 h-6" />
                <span className="font-medium">Close</span>
              </>
            ) : (
              <>
                <Menu className="w-6 h-6" />
                <span className="font-medium">Menu</span>
              </>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t mt-2 pt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <House className="w-5 h-5" />
                  <span className="font-bold">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">Locations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <BsPeople className="w-5 h-5" />
                  <span className="font-medium">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#logo"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Palette className="w-5 h-5" />
                  <span className="font-medium">Logo</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/#join"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Handshake className="w-5 h-5" />
                  <span className="font-medium">Join</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FaQuestion className="w-5 h-5" />
                  <span className="font-medium">FAQs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
