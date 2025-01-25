"use client";

import { PanelRightClose, PanelRightOpen } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AppSidebar from "./AppSideBar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navigationList } from "@/lib/navigationList";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <nav
        id="nav"
        className="flex items-center justify-between p-4 bg-black text-white"
      >
        <Link href="/" className="text-2xl font-bold">
          WS
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navigationList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-base hover:text-gray-300 flex items-center gap-2"
              >
                {Icon ? <Icon className="w-4 h-4" /> : null}
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
    </>
  );
};

export default Nav;
