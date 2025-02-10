"use client";

import {
  FileText,
  Menu,
  PanelRightOpen,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AppSidebar from "@/components/comp/AppSideBar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navigationList } from "@/lib/navigationList";
import Logo from "@/components/comp/logo";
import { usePathname } from "next/navigation";
import { UserButton } from "@/components/comp/auth/userButton";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);
  const isRoot = useIsRootPath();

  return (
    <header className="backdrop-blur-md grainy fixed top-0 z-50 w-screen">
      <nav className="flex items-center justify-between px-4 py-2 text-white bg-gradient-to-r from-black via-black/10 to-black mix-blend-difference">
        <Link href="/" className="text-2xl flex gap-2 font-bold">
          <Logo color="dark" size={40} className="bg-white p-1 rounded-full" />

          <h1 className="my-auto text-2xl font-era tracking-widest  text-white">
            WebsSoul
          </h1>
        </Link>

        <div className="flex flex-row my-auto justify-center gap-2 bg-blend-difference">
          <div className="hidden lg:flex justify-between gap-4 mr-4 ">
            {navigationList.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={isRoot ? item.href : `/${item.href}`}
                  className="font-era flex items-center gap-2 tracking-widest text-white"
                >
                  {Icon ? <Icon className="w-4 h-4 text-lime" /> : null}
                  {item.label}
                </Link>
              );
            })}
            <PoliciesMenu />
          </div>

          <UserButton />

          <Sheet onOpenChange={setSideBar} open={sideBar}>
            <SheetTrigger asChild>
              <div
                className="block my-auto md:hidden"
                onClick={() => setSideBar(true)}
              >
                {sideBar ? <PanelRightOpen /> : <Menu />}
              </div>
            </SheetTrigger>
            <SheetContent
              side="right"
              size="lg"
              className="h-full font-era min-w-60 overflow-y-auto bg-white text-black"
              title="Sidebar"
            >
              <AppSidebar handleHideSidebar={() => setSideBar(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

export const useIsRootPath = () => {
  return usePathname() === "/";
};

export function PoliciesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ all: "unset", display: "flex", alignItems: "center" }}
          >
            <span
              className="font-era flex items-center text-nowrap gap-2 tracking-widest bg-transparent hover:bg-transparent text-white"
            >
              <ShieldCheck className="w-4 h-4 text-lime"/>
              POLICIES
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-sm text-black p-2 rounded-md">
            <ul className="flex flex-col">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/policies/privacy-policy"
                    className="font-era flex items-center text-nowrap gap-2 hover:bg-black/20 px-1 py-2 rounded tracking-widest"
                  >
                    <ShieldCheck size={20}/>
                    Privacy Policy
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/policies/terms-conditions"
                    className="font-era flex items-center text-nowrap gap-2 hover:bg-black/20 px-1 py-2 rounded tracking-widest"
                  >
                    <FileText size={20}/>
                    Terms & Conditions
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/policies/refund-policy"
                    className="font-era flex items-center text-nowrap gap-2 hover:bg-black/20 px-1 py-2 rounded tracking-widest"
                  >
                    <RotateCcw size={20}/>
                    Refund Policy
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
