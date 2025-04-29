"use client";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { schoolMenu, studentMenu } from "../resources/menuItems";
import { useAuth } from "../contexts/AuthProvider";

export const Navbar = () => {
  const { user } = useAuth();
  const [menu, setMenu] = useState(studentMenu);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (user.role === "school") {
      setMenu(schoolMenu);
    }
  }, [user.role]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-14 flex items-center justify-between px-8 lg:px-20 shadow-sm relative">
      <span className="text-2xl font-semibold">Dashboard</span>

      <ul className="hidden sm:flex gap-4">
        {menu.map((item, index) => (
          <NavLink
            to={`/dashboard${item.link}`}
            className="text-primary font-medium hover:bg-primary hover:text-white px-2 rounded-lg py-1 cursor-pointer transition-colors"
            key={index}
          >
            {item.title}
          </NavLink>
        ))}
      </ul>

      <Menu className="sm:hidden" onClick={toggleMobileMenu} size={24} />
      <MobileHamburgerMenu
        menu={menu}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </nav>
  );
};

const MobileHamburgerMenu = ({ toggleMobileMenu, isMobileMenuOpen, menu }) => {
  const { logout } = useAuth();
  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-black/20`}
        onClick={toggleMobileMenu}
      />

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white z-50 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-5 py-3">
          <div className="w-full flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Menu</h2>
            <X onClick={toggleMobileMenu} />
          </div>
          <ul className="flex flex-col gap-4">
            {menu.map((item, index) => (
              <NavLink
                to={`/dashboard${item.link}`}
                onClick={toggleMobileMenu}
                key={index}
                className="text-primary font-medium hover:bg-primary hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors"
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
          <Button
            onClick={logout}
            className="w-full mx-auto bg-red-400 mt-4 text-white font-semibold rounded-lg"
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};
