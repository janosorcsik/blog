"use client";

import { Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon as XMarkIconOutline } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const links = [
  { text: "Home", href: "/" },
  { text: "Articles", href: "/articles" },
];

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex h-16 border-b border-gray-900/10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            className="-m-3 p-3 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:text-white">
          {links.map(({ text, href }) => {
            return (
              <Link key={text} href={{ pathname: href }}>
                {text}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-8"></div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-gray-800 px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIconOutline className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-2 space-y-2">
            {links.map(({ text, href }) => {
              return (
                <Link
                  key={text}
                  href={{ pathname: href }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white hover:text-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
