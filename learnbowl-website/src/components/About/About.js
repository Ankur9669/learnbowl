import React from "react";
import Hero from "./Hero/Hero";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
function About() {
  const [loader, setLoaderVisibilty] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Online French Learning-Best Teachers for School, College Students";
    setTimeout(() => setLoaderVisibilty(false), 200);
  }, []);
  return loader ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4/> */}
      <Section5 />
    </div>
  );
}

export default About;
