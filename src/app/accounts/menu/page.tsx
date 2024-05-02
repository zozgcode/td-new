"use client"

import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { moreLinks } from "./links";
import { useRouter } from "next/navigation";

export default function MorePage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };
  return (
    <div className="">
      <div className="w-full text-white uppercase flex justify-center items-center p-4 bg-[#048204] relative">
        <Link href="/accounts" className="absolute left-[20px]">
          <IoIosArrowBack className="text-2xl" />
        </Link>
        <span className="text-white text-lg font-semibold">Menu</span>
      </div>
      <div className="mt-5">
        <p className="px-5 text-base font-semibold">Useful Links</p>

        <div className="w-full mt-5 bg-white h-screen">
          {moreLinks.map((link, i) => (
            <Link
              key={i}
              href={link.slug}
              className="flex items-center text-base font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
          <li
            className="text-base font-semibold gap-2 text-[#2f5e80] p-4 px-5 border-b border-gray-400"
            onClick={handleLogout}
          >
            SIGN OUT
          </li>
        </div>
      </div>
    </div>
  );
}
