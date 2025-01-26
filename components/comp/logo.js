import React from "react";
import Image from "next/image";

const Logo = ({ color,size=40,className }) => {
  const src =
    color === "color"
      ? "/favicon.ico"
      : color === "dark"
      ? "/faviconBlack.ico"
      : color === "white"
      ? "/faviconWhite.ico"
      : "/defaultFavicon.ico";

  return (
      <Image src={src} width={size} height={size} alt="Logo" className={className}/>
  );
};

export default Logo;
