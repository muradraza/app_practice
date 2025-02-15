import React from "react";

function footer() {
  return (
    <div class="bd-highlight bg-dark text-white foot">
      <div className="p-2 bd-highlight footlogo">
        <a class="navbar-brand" href="#">
          <img src="/tcubelogo.png" alt="" width="200px" height="70px" />
        </a>
      </div>
      <div className="footlink">
        <p className="footh">Get in Touch</p>
        <ul>
          <li>
            <i class="bi bi-geo-alt-fill" />
            &nbsp;&nbsp;11150 N. Williams St Dunnellon, FL 34432
          </li>
          <li>
            <i class="bi bi-geo-alt-fill" />
            &nbsp;&nbsp;36 Grenada Crescent, M1B 2H5, Toronto, Canada
          </li>
          <li>
            <i class="bi bi-envelope-at" /> &nbsp;&nbsp;
            <a href={"mailto:info@teecubesolutionsltd.com"}>
              info@teecubesolutionsltd.com
            </a>
          </li>
          <li>
            <i class="bi bi-telephone" />
            &nbsp;&nbsp;
            <a href={"tel: (727) 777-4610"}>(727) 777-4610 - US</a>
          </li>

          <li>
            <i class="bi bi-telephone" />
            &nbsp;&nbsp;
            <a href={"tel: (437) 419-3255"}>(437) 419-3255 - CA</a>
          </li>
        </ul>
      </div>

      <div className="footlink">
        <p className="footh"> Learn More</p>
        <ul>
          <li>About Us</li>
          <li>Our Story</li>
          <li>Projects</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footlink">
        <p className="footh">Our Newsletter</p>
        <p>
          Subscribe to our newsletter to get our news & deals delivered to you.
        </p>

        <form class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Email
            </label>
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default footer;
