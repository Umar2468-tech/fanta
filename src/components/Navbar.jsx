import React from "react";
import Logo from "../assets/logo.png";
import { IoPersonSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const list = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Categroies",
    },
    {
      id: 3,
      text: "Blog",
    },
    {
      id: 4,
      text: "About",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className=" text-white py-4">
      <div className="container">
        <div className="max-w-screen-xl mx-auto  text-white flex justify-between items-center ">
          <img src={Logo} alt="" className="h-[50px] text-[white]" />
          <ul className="hidden md:flex gap-12">
            {list.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
          <IoMenu className="flex md:hidden" size={30}/>
          <IoPersonSharp className="hidden md:flex" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
