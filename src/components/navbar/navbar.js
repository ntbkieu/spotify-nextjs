"use client";

import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import ButtonAuth from "@/components/button/button-auth";



export default function Navbar() {
  const router = useRouter();
  const handleLogout = () => {
  }
  return (
    <div
      className={classNames(
        "w-full flex flex-col items-center justify-center",
        "transition-width duration-300 ease-in-out",
        "justify-between bg-gradient-to-b from-emerald-800 rounded-lg my-2"
      )}
    >
      <div className="w-full h-full flex justify-between items-center px-[20px] py-[10px]">
        <div className="hidden md:flex gap-x-2 items-center">
          <button onClick={() => { router.back() }} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button onClick={() => { router.forward() }} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" />
          </button>
        </div>

        <div className="flex flex-row gap-x-4 justify-start items-center">
          <>
            <div>
              <ButtonAuth
                onClick={() => { }}
                title={'Sign up'}
                classExtra="cursor-pointer bg-transparent text-neutral-300 font-medium"
              />
            </div>
            <div>
              <ButtonAuth
                onClick={() => { }}
                title={'Log in'}
                classExtra="cursor-pointer"
              />
            </div>
          </>
          {/* <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border-[2px]">
            <Image
              src="/images/avatar.jpg"
              width={45}
              height={45}
              className="object-cover rounded-full"
              alt="Spotify"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
