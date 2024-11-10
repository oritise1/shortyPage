import React from "react";
import BgImg from "../../assets/bg-boost-desktop.svg";
import Button from "../Button";

const Boost = () => {
  return (
    <div
      className="w-full py-10 px-6 md:px-10 lg:px-20 xl:px-40 bg-purple-900 bg-cover bg-center flex flex-col text-center items-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <h1 className="mb-6 text-white text-2xl md:text-3xl lg:text-4xl font-extrabold">
        Boost your links today
      </h1>
      <Button
        color="bg-[#9ae4e5]"
        hoverColor="hover:bg-blue-300"
        paddingX="px-8 md:px-10"
        paddingY="py-3"
        borderRaduis="rounded-full"
      >
        Get Started
      </Button>
    </div>
  );
};

export default Boost;
