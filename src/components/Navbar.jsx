import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-5 py-4 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          <span>Password </span>{" "}
          <span className="text-green-500">Manager/&gt;</span>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4 mr-6">
            <li>
              <a className="hover:font-bold" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:font-bold" href="/">
                About
              </a>
            </li>
          </ul>
          <a href="https://github.com/saujeet" target="_blank" className="cursor-pointer flex items-center p-1">
            <span>
              <img
                className="mr-2 w-7"
                src="/icons/github-mark-white.png"
                alt=""
              />
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
