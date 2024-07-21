import React from "react";
import Hero from "../Components/Hero";
import Servicesgrid from "../Components/Servicesgrid";
import About from "../Components/About";
import Testimonial from "../Components/Testimonial";
import Approch from "../Components/Approch";
import { Helmet } from "react-helmet";
import Popmodal from "../Components/Popmodal";

function Index() {
  return (
    <>
      <Helmet>
        <title>Digital</title>
        <meta />
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

      <div className="showcase">
        <p>OUR PROJECTS</p>
        <h3>
          Check out some of our awesome projects with creative ideas and great
          design.
        </h3>
      </div>

      <div className="project pro1">
        <div className="proimg">
          <img src="/web.jpg" />
        </div>
        <div className="protxt">
          <h5>Headind</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="project2 pro1">
        <div className="proimg">
          <img src="/web.jpg" />
        </div>
        <div className="protxt">
          <h5>Headind</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Popmodal />
      <Testimonial />
    </>
  );
}

export default Index;
