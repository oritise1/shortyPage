import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../Button/index";
import { List, X } from "@phosphor-icons/react";
import Mobile from "./Mobile";

const NavBar = () => {
  const [toggleMobile, setIsToggleMobile] = useState(false);
  return (
    <>
      {toggleMobile && <Mobile />}
      <div className="flex justify-between fixed w-full bg-white z-50 top-0 left-0 items-center py-3">
        <img src={Logo} alt="logo of the website" className="block md:hidden" />
        <div className="container hidden  md:flex justify-between ">
          <nav className="flex justify-start items-center gap-10">
            <img
              src={Logo}
              alt="logo of the website"
              className="hidden md:flex"
            />
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </nav>

          <div className="flex justify-start items-center">
            <Button
              color="bg-white"
              hoverColor="hover:bg-white"
              textColor="text-black"
            >
              Login
            </Button>
            <Button color="bg-[#9ae4e5]" className="">
              Sign Up
            </Button>
          </div>
        </div>
        <div
          className=" block md:hidden"
          onClick={() => setIsToggleMobile(!toggleMobile)}
        >
          {toggleMobile ? <X size={30} /> : <List size={30} />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
