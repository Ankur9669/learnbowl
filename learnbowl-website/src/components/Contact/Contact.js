import React from "react";
import Section1 from "./Section1/Section1";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function Contact() {
  const [loader, setLoaderVisibilty] = useState(true);
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
    <div className="contact">
      <Section1 />
    </div>
  );
}

export default Contact;
