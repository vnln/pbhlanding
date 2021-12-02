import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Advantages = () => {
  const { advantages } = config;

  return (
    <section className={`bg-background py-8`} id="advantages">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-3xl sm:text-5xl font-bold leading-tight text-center text-primary break-normal`}
        >
          {advantages.title}
        </h1>
        <Divider />
        <div className={`w-5/6 sm:w-3/4 m-auto`}>
          <ul className={`list-disc`}>
            {advantages.items.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <li className={`text-gray-500 p-3`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
