import React from "react";
import Pagebanner from "../Components/Pagebanner";
import "../css/showcase.css";

function Showcase() {
  return (
    <>
      <Pagebanner name={"Show Case"} />

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
    </>
  );
}

export default Showcase;
