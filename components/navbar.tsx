import { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useScroll, motion, useTransform } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 212], [12, 0]);
  const opacity = useTransform(scrollY, [0, 212], [0, 1]);
  const { theme, setTheme } = useTheme();

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 px-2 sm:px-6 lg:px-8 bg-primary dark:bg-dark-primary border-b-2 border-secondary dark:border-dark-secondary"
    >
      {({ open }) => (
        <>
          <div>
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary/75 dark:hover:bg-dark-secondary/75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary dark:focus:ring-dark-secondary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {router.pathname === "/" ? (
                    <motion.div style={{ y, opacity }}>
                      <Image
                        src="/images/profile.jpg"
                        className="rounded-full block h-8 w-auto"
                        height={40}
                        width={40}
                        alt="handsome"
                      />
                    </motion.div>
                  ) : (
                    <Image
                      src="/images/profile.jpg"
                      className="rounded-full block h-8 w-auto"
                      height={40}
                      width={40}
                      alt="handsome"
                    />
                  )}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        href={item.href}
                        key={item.href}
                        aria-current={
                          router.pathname === item.href ? "page" : undefined
                        }
                      >
                        <a
                          aria-current={
                            router.pathname === item.href ? "page" : undefined
                          }
                          className={`
                          ${
                            router.pathname === item.href
                              ? "bg-secondary dark:bg-dark-secondary"
                              : "text-accent/75 dark:text-dark-accent/75 hover:bg-secondary/75 dark:hover:bg-dark-secondary/75"
                          } 
                          px-3 py-2 rounded-md text-sm font-medium
                        `}
                        >
                          {" "}
                          {item.name}{" "}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-secondary dark:focus:ring-offset-dark-secondary">
                      <span className="sr-only">Open language menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                        />
                      </svg>
                      EN
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 px-2 shadow-lg ring-1 ring-accent dark:ring-dark-accent ring-opacity-5 focus:outline-none bg-primary dark:bg-dark-primary divide-y divide-accent/50 dark:divide-dark-accent/50">
                      <Menu.Item>
                        <span
                          className={`
                            block px-4 py-2 text-sm text-accent dark:text-dark-accent
                          `}
                        >
                          English
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <span
                          className={`
                            block px-4 py-2 text-sm text-accent dark:text-dark-accent
                          `}
                        >
                          Chinese
                        </span>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="relative ml-3 toggle-group">
                  <button
                    type="button"
                    aria-label="Theme Toggle"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="flex justify-between items-center w-12 h-6 rounded-full text-sm box-content border-2 border-accent dark:border-dark-accent focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-secondary dark:focus:ring-offset-dark-secondary"
                  >
                    <div className="toggle-btn"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="fill-amber-500 text-amber-500 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="fill-sky-500 text-sky-500 w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  aria-current={
                    router.pathname === item.href ? "page" : undefined
                  }
                >
                  <a
                    aria-current={
                      router.pathname === item.href ? "page" : undefined
                    }
                    className={`
                    ${
                      router.pathname === item.href
                        ? "bg-secondary dark:bg-dark-secondary"
                        : "text-accent/75 dark:text-dark-accent/75 hover:bg-secondary/75 dark:hover:bg-dark-secondary/75"
                    } 
                    block px-3 py-2 rounded-md text-base font-medium
                  `}
                  >
                    {" "}
                    {item.name}{" "}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
