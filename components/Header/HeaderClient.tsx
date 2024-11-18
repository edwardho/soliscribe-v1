'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import menuData from "./menuData";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import MobileNav from "./MobileNav";

export default function HeaderClient({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathUrl = usePathname();
  const { user } = useKindeBrowserClient()

  // Handle initial mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full bg-background py-4 ${
          stickyMenu ? "!py-3 shadow transition duration-100" : ""
        }`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="relative mx-auto flex items-center justify-between">
            {/* Navigation Menu */}
            <div className="flex items-center">
              {/* Logo */}
              <a href="/" className="relative flex items-center gap-2">
                <Image
                  width={32}
                  height={32}
                  src="/images/logo/logo.svg"
                  alt="Logo"
                />
                <span className="text-lg font-semibold text-foreground">soliscribe</span>
              </a>
            </div>

            <div
              className={`invisible absolute left-0 right-0 top-full h-0 w-full bg-background xl:visible xl:relative xl:flex xl:h-auto xl:w-auto ${
                navigationOpen &&
                "navbar !visible mt-4 h-auto max-h-[400px] rounded-md p-7.5 shadow-md xl:mt-0 xl:h-auto xl:p-0 xl:shadow-none"
              }`}
            >
              {/* Only show nav menu if user is not logged in */}
              {!user && (
                <nav className="flex-1">
                  <ul className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-8">
                    {menuData.map((menuItem, key) => (
                      <li key={key} className={menuItem.submenu && "group relative"}>
                        {menuItem.submenu ? (
                          <>
                            <button
                              onClick={() => setDropdownToggler(!dropdownToggler)}
                              className="flex cursor-pointer items-center justify-between gap-3 text-foreground hover:text-primary"
                            >
                              {menuItem.title}
                              <span>
                                <svg
                                  className="h-3 w-3 cursor-pointer fill-muted-foreground group-hover:fill-primary"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                </svg>
                              </span>
                            </button>

                            <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
                              {menuItem.submenu.map((item, key) => (
                                <li key={key} className="text-foreground hover:text-primary">
                                  <Link href={item.path || "#"}>{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            href={`${menuItem.path}`}
                            className={pathUrl === menuItem.path
                              ? "text-primary hover:text-primary"
                              : "text-foreground hover:text-primary"
                            }
                          >
                            {menuItem.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            <div className="flex items-center gap-5">
              <ThemeToggler />
              {children}
              <MobileNav isAuth={!!user} />
            </div>
          </div>
        </div>
      </header>
      {/* Add padding to push content below fixed header */}
      <div className="h-[72px]"></div>
    </>
  );
} 