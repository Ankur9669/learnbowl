import React from "react";
import Hero from "./Hero/Hero";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
// import Section4 from './Section4/Section4'
import Section5 from "./Section5/Section5";
import Section6 from "../French/Section5/Section5";
import Section4 from "../French/Section3/Section3";
import { useEffect, useState } from "react";
import "./vedic.css";
import Loader from "../Loader/Loader";
function Vedic() {
  const [loader, setLoaderVisibilty] = useState(true);
  //Whenever the component will load it would load from the start
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "High Speed Vedic Math Course | Learnbowl";
    setTimeout(() => setLoaderVisibilty(false), 200);
  });
  return loader ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="vedic">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default Vedic;
