import React from "react";

type DividerProps = {
  width?: string;
};
const Divider = ({ width = "w-3/4" }: DividerProps) => {
  return (
    <div className={`w-full mb-4`}>
      <div
        className={`h-1 mx-auto bg-primary ${width} opacity-25 my-0 py-0 rounded mb-10`}
      ></div>
    </div>
  );
};

export default Divider;
