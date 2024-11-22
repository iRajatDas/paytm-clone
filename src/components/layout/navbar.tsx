"use client";

import Image from "next/image";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
      <div
        className={`sticky top-0 z-30 flex w-full justify-center bg-white font-semibold text-black shadow-lg shadow-neutral-300/30 transition-all shrink-0`}
      >
        <div className="mx-auto flex h-[5.75rem] w-full max-w-[1170px] items-center justify-center">
          <Link
            href="/"
            className="flex shrink-0 items-center font-display text-2xl"
          >
            <Icons.PayTM className="" />
          </Link>
          <nav className="flex flex-1 items-center justify-around">
            <ul className="flex space-x-3 pr-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md p-3 text-[17px] text-black transition-colors duration-200 hover:bg-gray-100/90"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <button
              className={cn(
                "rounded-full bg-brand-primary text-[15px] text-white transition-all hover:bg-brand-primary-dark-dark",
                "group grid place-items-center",
              )}
              onClick={() => setShowSignInModal(true)}
            >
              <div className="flex items-center gap-2 py-0.5 pl-5 pr-0.5">
                <span className="">Sign In</span>
                <span className="size-[34px] relative inline-block">
                  <Icons.UserSignIn className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <Icons.UserSignOut className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const navItems = [
  {
    label: "Paytm for Consumer",
    href: "#",
  },
  {
    label: "Paytm For Business",
    href: "#",
  },

  {
    label: "Investor Relations",
    href: "#",
  },
  {
    label: "Company",
    href: "#",
  },
  {
    label: "Career",
    href: "#",
  },
];
