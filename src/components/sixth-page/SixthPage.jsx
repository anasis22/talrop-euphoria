import React from "react";
import InTheLimeLight from "../InTheLimeLight";
import Feedback from "../Feedback";

const SixthPage = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-12">
      <div className="flex w-[90%] ">
        <span className="bg-base-color text-base-color rounded-md">1</span>
        <h2 className="ml-4 text-t-color text-3xl font-semibold">
          In The Limelight
        </h2>
      </div>
      <InTheLimeLight />
      <div className="flex w-[90%] mt-12">
        <span className="bg-base-color text-base-color rounded-md">1</span>
        <h2 className="ml-4 text-t-color text-3xl font-semibold">
          Feedback
        </h2>
      </div>
      <Feedback />
    </div>
  );
};

export default SixthPage;
