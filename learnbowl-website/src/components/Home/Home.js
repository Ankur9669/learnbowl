import React from "react";
import Cardsection from "./Cardsection/Cardsection";
import Hero from "./Hero/Hero";
import { useRef, useEffect, useState } from "react";
import "./home.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Loader from "../Loader/Loader";
function Home() {
  const [loader, setLoaderVisibilty] = useState(true);
  const cardSectionRef = useRef();
  function scrollToCardSection() {
    cardSectionRef.current.scrollIntoView({
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
    <div className="homepage">
      <Hero scrollToCardSection={() => scrollToCardSection} />
      <Section1 />
      <Cardsection cardRef={cardSectionRef} />
      <Section2 scrollToCardSection={() => scrollToCardSection} />
      {/* <Section3/> */}
      <Section4 />
      <Section5 scrollToCardSection={() => scrollToCardSection} />
    </div>
  );
}

export default Home;
