import React from "react";
import "../css/about.css";

import Pagebanner from "../Components/Pagebanner";

function About() {
  return (
    <>
      <Pagebanner name={"About Us"} />
      <div className="about">
        <div className="about1">
          <h2>
            The full service we are offering is specifically designed to meet
            your business needs and projects.
          </h2>
          <p>
            nteger posuere erat a ante venenatis dapibus posuere velit aliquet.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur duis
            mollis commodo.
          </p>
        </div>
        <div className="about2">
          <div
            class="progress"
            style={{
              height: "20px",
              borderRadius: "25px",
            }}
          >
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Strategy
            </div>
          </div>
          <div style={{ margin: "10px 0" }}>
            <div
              class="progress"
              style={{
                height: "20px",
                borderRadius: "25px",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "55%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Strategy
              </div>
            </div>
          </div>
          <div
            class="progress"
            style={{
              height: "20px",
              borderRadius: "25px",
            }}
          >
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Strategy
            </div>
          </div>
        </div>
      </div>

      <div
        class="row row-cols-1 row-cols-md-4 g-4"
        style={{ widows: "90%", margin: "auto" }}
      >
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="megaphone.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Marketing</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="mark.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Strategy</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="screen.png"
              class="card-img-top"
              alt="..."
              style={{ width: "80px", margin: "auto" }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Development</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card"
            style={{
              padding: "20px",
            }}
          >
            <img
              src="analytics.png"
              class="card-img-top"
              alt="..."
              style={{
                width: "80px",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            />
            <div class="card-body text-center">
              <h5 class="card-title">Data Analysis</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
