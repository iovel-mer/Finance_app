import Link from "next/link";
import React from "react";

const Pageheader = ({className}) => {
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href={"/dashboard"}
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance App
      </Link>
      <div className="flex items-center space-x-4">
        <div>Togele</div>
        <div>Dropdown</div>
      </div>
    </header>
  );
};

export default Pageheader;
