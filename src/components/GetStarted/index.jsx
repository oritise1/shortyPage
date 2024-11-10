import React from "react";
import Button from "../Button";
import Illustration from "../../assets/illustration-working.svg";

const GetStarted = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-8 lg:py-20">
      <div className="text-center lg:text-left lg:max-w-lg">
        <h1 className="text-3xl lg:text-6xl font-extrabold mb-4 lg:mb-6">
          More than just shorter links
        </h1>
        <p className="text-gray-500 text-base lg:text-xl font-semibold mb-6 lg:mb-8">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button
          color="bg-[#9ae4e5]"
          hoverColor="hover:bg-blue-300"
          paddingX="px-6 lg:px-8"
        >
          Get Started
        </Button>
      </div>
      <div className="flex justify-center items-center lg:justify-end mb-8 lg:mb-0">
        <img
          src={Illustration}
          alt="a girl using a system"
          className="w-72 lg:w-[32rem] xl:w-[36rem] max-w-full"
        />
      </div>
    </div>
  );
};

export default GetStarted;
