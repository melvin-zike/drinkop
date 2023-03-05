import React from "react";

const About = () => {
  return (
    <>
      <section id="hero" class="clearfix">
        <div class="container" data-aos="fade-up">
          <div class="hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.svg" alt="" class="img-fluid" />
          </div>

          <div class="hero-info" data-aos="zoom-in" data-aos-delay="100">
            <h2>
              We provide
              <br />
              <span>solutions</span>
              <br />
              for your business!
            </h2>
            <div>
              <a href="#about" class="btn-get-started scrollto">
                Get Started
              </a>
              <a href="#services" class="btn-services scrollto">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="pricing sections-bg mb-3">
        <div class="container" data-aos="fade-up">
          <div class="section-header text-center">
            <h2>Pricing</h2>
            <p>Buy Water Now And Get It Delivered To Your DoorStep</p>
          </div>

          <div
            class="row g-4 py-lg-5 "
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <div class="col-lg-4 ">
              <div class="pricing-item bg-light">
                <h3>Bottle Water</h3>
                <div class="icon">
                  <i class="bi bi-box"></i>
                </div>
                <h4>
                  <sup>₦</sup>700<span>per pack</span>
                </h4>
                <ul>
                  <li class="na">
                    <i class="bi bi-x"></i> <span>Aquafina</span>
                  </li>
                  <li class="na">
                    <i class="bi bi-x"></i> <span>Eva Water</span>
                  </li>
                </ul>
                <div class="text-center">
                  <button class="buy-btn">Comin Soon...</button>
                </div>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div class="col-lg-4">
              <div class="pricing-item bg-success text-white featured">
                <h3>Pure Water</h3>
                <div class="icon">
                  <i class="bi bi-airplane"></i>
                </div>

                <h4>
                  <sup>₦</sup>270k<span> per bag</span>
                </h4>
                <ul class="text-align-center">
                  <li class="text-white">
                    <i class="bi bi-check"></i>Minimum of 5bags
                  </li>
                  <li class="text-white">
                    <i class="bi bi-check"></i>10 bags
                  </li>
                  <li class="text-white">
                    <i class="bi bi-check"></i>15 bags
                  </li>
                  <li class="text-white">
                    <i class="bi bi-check"></i>20 bags
                  </li>
                  <li class="text-white">
                    <i class="bi bi-check"></i>25 bags
                  </li>
                </ul>
                <div class="text-center">
                  <button class="buy-btn bg-light text-success">Buy Now</button>
                </div>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div class="col-lg-4">
              <div class="pricing-item bg-light">
                <h3>Dispenser Water</h3>
                <div class="icon">
                  <i class="bi bi-send"></i>
                </div>
                <h4>
                  <sup>₦</sup>300<span>per bottle</span>
                </h4>
                <ul>
                  <li class="na">
                    <i class="bi bi-x"></i> <span>Cway</span>
                  </li>
                  <li class="na">
                    <i class="bi bi-x"></i> <span>Aquafina</span>
                  </li>
                </ul>
                <div class="text-center">
                  <button href="#" class="buy-btn">
                    Coming Soon...
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
