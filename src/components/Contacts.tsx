import React, { CSSProperties } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import config from "../config/index.json";
import Divider from "./Divider";

const Contacts = () => {
  const { contacts } = config;
  const { title, mapData, adress, email, phones } = contacts;

  const style: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div
      id="contacts"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <h1
        className={`w-full my-2 text-3xl sm:text-5xl font-bold leading-tight text-center text-primary`}
      >
        {title}
      </h1>
      <Divider />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex relative">
            <YMaps>
              <Map style={style} defaultState={mapData}>
                <Placemark geometry={mapData.center} />
              </Map>
            </YMaps>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full my-0 md:my-16">
            <h2 className="text-gray-900 text-lg my-5 font-medium title-font">
              Юридический адрес
            </h2>
            <p className="leading-relaxed text-gray-600">{adress}</p>
            <h2 className="text-gray-900 text-lg my-5 font-medium title-font">
              E-mail
            </h2>
            <a
              className="leading-relaxed text-gray-600 w-max"
              href={"mailto:" + email}
            >
              {email}
            </a>
            <h2 className="text-gray-900 text-lg my-5 font-medium title-font">
              Телефоны
            </h2>
            <div className="grid grid-cols-2">
              {phones.map((item) => (
                <>
                  <a
                    className="leading-relaxed text-gray-600 w-max"
                    href={"tel:" + item.number}
                  >
                    {item.number}
                  </a>
                  <span className="text-gray-900">{item.name}</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center mt-6">
        <p className="mt-6 mx-auto text-xs lg:text-sm leading-none text-gray-200">
          {new Date().getFullYear()} &copy; Разработка{" "}
          <a href="https://github.com/vnln" rel="nofollow">
            vnln
          </a>
          , шаблон{" "}
          <a href="https://github.com/issaafalkattan" rel="nofollow">
            issaafalkattan
          </a>
        </p>
      </div>
    </div>
  );
};
export default Contacts;
