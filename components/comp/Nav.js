"use client";

import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AppSidebar from "@/components/comp/AppSideBar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navigationList } from "@/lib/navigationList";
import Logo from "@/components/comp/logo"

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <header 
    // className="md:fixed md:top-0 md:z-50 w-full"
    >
      <nav
        className="flex items-center justify-between px-4 py-2 bg-black text-white"
      >
        <Link href="/" className="text-2xl font-bold">
          <Logo color="color" size={40} className="bg-lime p-1 rounded-full" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navigationList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="font-era hover:text-gray-300 flex items-center gap-2"
              >
                {Icon ? <Icon className="w-4 h-4 text-lime" /> : null}
                {item.label}
              </Link>
            );
          })}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <div
              className="block lg:hidden"
              onClick={() => setSideBar(!sideBar)}
            >
              {sideBar ? <PanelRightOpen /> : <PanelRightClose />}
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            size="lg"
            className=" h-full font-era min-w-60 overflow-y-auto bg-white text-black"
            title="Sidebar"
          >
            <AppSidebar
              handleShowSidebar={() => setSideBar(true)}
              handleHideSidebar={() => setSideBar(false)}
            />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Nav;
