import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex items-center justify-center flex-col p-2 relative bottom-0 w-full">
      <div>Password Manager</div>
      <div className="flex items-center justify-center w-full">
        <a className="px-4" href="">
          About
        </a>
        <a className="px-4" href="https://github.com/saujeet">
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
