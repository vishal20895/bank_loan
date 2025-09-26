import React from "react";

const UserData = () => {
  return (
    <div className=" grid grid-cols-6 p-10 justify-center items-center max-w-7xl mx-auto w-[1151px] h-[52px] ml-[153px] ">
      <div className="col-span-2">
        <h1 className="text-white h-[52px] flex items-center">
          <span className="text-[40px] font-bold">3800+</span>
          <span className="text-[20px]  text-[#5CE1E6] ml-2 ">Users</span>
        </h1>
      </div>

      <div className="col-span-2">
        <h1 className="text-white h-[52px] flex items-center">
          <span className="text-[40px] font-bold">230+</span>
          <span className="text-[20px]  text-[#5CE1E6] ml-2">Trust By Company</span>
        </h1>
      </div>
      <div className="col-span-2">
        <h1 className="text-white h-[52px] flex items-center">
          <span className="text-[40px] font-bold">$230M+</span>
          <span className="text-[20px]  text-[#5CE1E6] ml-2">Transactions</span>
        </h1>
      </div>
    </div>
  );
};

export default UserData;
