import React from "react";
import Hero from "../French/Hero/Hero";

import "./french.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";
function French() {
  const heroFrenchRef = useRef();
  const [loader, setLoaderVisibilty] = useState(true);
  function scrollToHeroFrenchSection() {
    heroFrenchRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  //Whenever the component will load it would load from the start
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
    <div className="french">
      <Hero heroFrenchRef={heroFrenchRef} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 scrollToHeroFrenchSection={() => scrollToHeroFrenchSection} />
      <Section5 />
    </div>
  );
}

export default French;
