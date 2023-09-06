"use client";

import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  let toggleTheme = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [toggle]);

  return (
    <div className="container px-4">
      <div className="flex items-center justify-between py-2">
        <div className="text-2xl lg:text-4xl font-bold">
          Noodle<span className="text-[#FF8800]">Nest</span>
        </div>

        <ul className="hidden lg:flex lg:items-center lg:space-x-6">
          <li> Home </li>
          <li> About </li>
          <li> Pricing </li>
          <li> Faq </li>
          <li> Contact </li>
        </ul>

        <div className="flex items-center gap-2">
          <div
            className="relative h-5 w-11 border-[1px] border-[#26242e] rounded-xl cursor-pointer"
            onClick={() => toggleTheme()}
          >
            <div
              className={`absolute top-[50%] left-1 bottom-0 translate-y-[-50%] h-4 w-4 bg-black rounded-full ${
                toggle ? "translate-x-[18px]" : "translate-x-0"
              } transition duration-500`}
            ></div>
          </div>

          <ShoppingCartIcon className="h-5 w-5" />
          <MenuIcon className="h-7 w-7 lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
