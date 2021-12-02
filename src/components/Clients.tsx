import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Clients = () => {
  const { clients } = config;
  const { title, description, items: clientsList } = clients;
  return (
    <div className={`py-12 bg-background`} id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1
            className={`w-full my-2 text-3xl sm:text-5xl font-bold leading-tight text-center text-primary break-normal`}
          >
            {title}
          </h1>
          <Divider />
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {clientsList.map((client) => (
              <div key={client.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-20 w-20 rounded-md bg-background text-tertiary border-gray-100 border-4`}
                  >
                    <img
                      className={`inline-block p-1`}
                      src={client.icon}
                      alt={client.name}
                    />
                  </div>
                  <p className="ml-24 text-lg leading-6 font-medium text-gray-900">
                    {client.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-24 text-sm text-gray-500">
                  {client.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-10 max-w-3xl text-base text-justify text-gray-500 mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Clients;
