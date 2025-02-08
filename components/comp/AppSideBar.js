import React from "react";
import { navigationList } from "@/lib/navigationList";
import Link from "next/link";

const AppSidebar = ({handleHideSidebar}) => {
  return (
    <div className="p-4 max-w-30">
      {navigationList.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => handleHideSidebar()}
            className=" flex items-center mb-4 gap-4"
          >
            {Icon ? <Icon className="w-4 h-4 text-amber-600" /> : null}
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AppSidebar;
