import Link from "next/link";
import React from "react";
import { MoveRight } from 'lucide-react';

const MessageDiv = () => {
  const message = "";
  const link = "#contact";
  
  if (message != "") {
    return (
      <div className="bg-gradient-to-r from-[#ffffde] via-[#5f5e5e] to-[#ffffde]">
        <Link
          href={link}
          target="_blank"
          className="text-center text-white py-1 px-2 flex flex-row gap-2 justify-center"
        >
          {message}
          <MoveRight />
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default MessageDiv;
