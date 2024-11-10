import React from "react";

const Mobile = () => {
  return (
    <div className=" absolute top-[50px] w-full h-full z-50 block md:hidden   bg-[#FFF]">
      <div className="flex flex-col p-5 space-y-4">
        <nav className="flex flex-col">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </nav>
      </div>
      <ul className="flex gap-5 p-5">
        <button className="bg-[#9ae4e5] px-2 py-3 rounded">Sign up</button>
        <button className="bg-[#9ae4e5] px-2 py-3 rounded">Login</button>
      </ul>
    </div>
  );
};

export default Mobile;
