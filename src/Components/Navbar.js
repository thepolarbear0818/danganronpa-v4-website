import React from "react";

const Navbar = () => {
  const pages = [
    { name: "Home", redirect: "" },
    { name: "Read it here", redirect: "contact" },
    { name: "About", redirect: "about"}
  ];

  return (
    <nav className="flex bg-orange-500 text-white w-full px-4 py-6">
      <div className="flex items-center bg-orange-500 w-full space-x-12">
        <h1 className="text-4xl ">Danganronpa V4</h1>
        <ul className="flex items-center space-x-8">
          {pages.map((item) => {
            return (
              <li  className="cursor-pointer duration-250 transition-all hover:shadow-xl hover:shadow-cyan-300 rounded-2xl text-md font-serif border-2 px-4 py-2">
                <a onClick={() =>  document.getElementById(item.redirect).scrollIntoView()}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;