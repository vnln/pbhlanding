import React from "react";

import "../styles/main.css";
import Head from "next/head";

import Advantages from "../components/Advantages";
import Contacts from "../components/Contacts";
import Clients from "../components/Clients";
import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Head>
        <title>Промбытхим</title>
      </Head>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <Advantages />
      </LazyShow>
      <LazyShow>
        <Clients />
      </LazyShow>
      <LazyShow>
        <Contacts />
      </LazyShow>
    </div>
  );
};

export default App;
