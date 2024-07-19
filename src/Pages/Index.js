import React from "react";
import Hero from "../Components/Hero";
import Servicesgrid from "../Components/Servicesgrid";
import About from "../Components/About";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Approch from "../Components/Approch";
import { Helmet } from "react-helmet";

function Index() {
  return (
    <>
      <Helmet>
        <title>Digital</title>
      </Helmet>
      <Hero />
      <Servicesgrid />
      <About />
      <Approch />
      <div
        className="cta"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className="ctap">BECOME A PART OF OUR THRIVING NETWORK</p>
        <h3 className="ctah">
          With the trust of over 5000+ clients, you can join our community and
          harness our services to fuel your business growth.
        </h3>

        <button
          type="button"
          class="btn btn-primary"
          style={{
            padding: "10px 45px",
          }}
        >
          <a
            href={"tel:03322082393"}
            style={{
              color: "#fff",
              listStyle: "none",
              textDecoration: "none",
            }}
          >
            Call Now
          </a>
        </button>
      </div>

      <Testimonial />
    </>
  );
}

export default Index;
