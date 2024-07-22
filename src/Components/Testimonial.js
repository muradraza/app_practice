import React from "react";
import "../css/testi.css";

function Testimonial() {
  return (
    <>
<<<<<<< HEAD
      <h1>What You Say Now</h1>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="carousel slide"
              data-ride="carousel"
              id="quote-carousel"
            >
              {/* <!-- Bottom Carousel Indicators --> */}
              <ol class="carousel-indicators">
                <li
                  data-target="#quote-carousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#quote-carousel" data-slide-to="1"></li>
                <li data-target="#quote-carousel" data-slide-to="2"></li>
              </ol>
              {/*         
<!-- Carousel Slides / Quotes --> */}
              <div class="carousel-inner">
                {/* <!-- Quote 1 --> */}
                <div class="item active">
                  <div class="row">
                    <div class="col-sm-12">
                      <p>
                        &ldquo;Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas sed diam eget risus varius
                        blandit sit amet non magna. Etiam porta sem malesuada
                        magna mollis euismod. Nulla vitae elit libero, a
                        pharetra augue. Donec id elit non mi porta gravida at
                        eget metus.&rdquo;
                      </p>
                      <small>
                        <strong>Vulputate M., Dolor</strong>
                      </small>
                    </div>
                  </div>
                </div>

                {/* <!-- Quote 2 --> */}
                <div class="item">
                  <div class="row">
                    <div class="col-sm-12">
                      <p>
                        &ldquo;Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor. Aenean lacinia
                        bibendum nulla sed consectetur. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Aenean eu leo quam.
                        Pellentesque ornare sem lacinia quam venenatis
                        vestibulum.&rdquo;
                      </p>
                      <small>
                        <strong>Fringilla A., Vulputate Sit</strong>
                      </small>
                    </div>
                  </div>
                </div>

                {/* <!-- Quote 3 --> */}
                <div class="item">
                  <div class="row">
                    <div class="col-sm-12">
                      <p>
                        &ldquo;In one word.. WOW! Theresa Founder of Courageous
                        Womens Foundation..&rdquo;
                      </p>
                      <small>
                        <strong>Theresa</strong>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
=======
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
>>>>>>> 7cf77d0d22e2dcfce04ff8d625eaa89687380b82
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/bannner.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/bannner.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/bannner.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Testimonial;
