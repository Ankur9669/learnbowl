import React from "react";
import "./frenchschool.css";
import Hero from "./Hero/Hero";
import Section1 from "../French/Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "../Home/Section4/Section4";
import Section6 from "./Section6/Section6";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
function FrenchSchool() {
  const [loader, setLoaderVisibilty] = useState(true);
  useEffect(() => {
    document.title =
      "Online French Learning-Best Teachers for School, College Students";
    setTimeout(() => setLoaderVisibilty(false), 200);
  }, []);

  return loader ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="frenchschool">
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

export default FrenchSchool;
