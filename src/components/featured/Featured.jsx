import { BarChartOutlined } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = () => {
  return (
    // <!-- ======= Frequently Asked Questions Section ======= -->
    <section id="faq" class="faq my-5">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3>
                Frequently Asked{" "}
                <strong className="text-success">Questions</strong>
              </h3>
              <p>Some questions that you might want to ask us</p>
            </div>
          </div>

          <div class="col-lg-8">
            <div
              class="accordion accordion-flush"
              id="faqlist"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1"
                  >
                    <span class="num">1.</span>
                    What Is Drinkup.ng About?
                  </button>
                </h3>
                <div
                  id="faq-content-1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div class="accordion-body">
                    Drinkup Nigeria is an App that connects drinking water (pure
                    water, bottle water and Dispenser water) vendors with
                    customers from the comfort of their homes.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1"
                  >
                    <span class="num">1.</span>
                    Where Are You Located?
                  </button>
                </h3>
                <div
                  id="faq-content-1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div class="accordion-body">
                    Lagos, Nigeria. Coming soon to all states of the Federation.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-2"
                  >
                    <span class="num">2.</span>
                    How do I order?
                  </button>
                </h3>
                <div
                  id="faq-content-2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div class="accordion-body">
                    Kindly Register, Fill in all your details, location and
                    address, verify, And login. All the water vendors(Pure Water
                    for now) around your will be on your home page. You can then
                    click the Buy Water button on any vendor of your choice,
                    choose amount of bags and click Order
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-3"
                  >
                    <span class="num">3.</span>
                    How do I earn with Drinkup Nigeria's referral system
                  </button>
                </h3>
                <div
                  id="faq-content-3"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div class="accordion-body">
                    You will earn ₦10 on any bag of pure water bought by anyone
                    you refer through drinkup Site/App. After you register you
                    will get a referal link and anyone who uses it to register
                    on our site becomes your downliner always. 100 bags bought
                    by your downliners gives you ₦1000.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-4"
                  >
                    <span class="num">4.</span>
                    How do I fund my wallet
                  </button>
                </h3>
                <div
                  id="faq-content-4"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div class="accordion-body">
                    After registering, Click on the Wallet Button, You will find
                    fund wallet on page click fund wallet and pay with card or
                    tarnsfer. Orders will be deducted from wallet ballance.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}

              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-5"
                  >
                    <span class="num">5.</span>
                    How long does it take for my orders to arrive
                  </button>
                </h3>
                <div
                  id="faq-content-5"
                  class="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div class="accordion-body">
                    1 to few hours. Orders should be made a day before needed or
                    that same day.
                  </div>
                </div>
              </div>
              {/* <!-- # Faq item--> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Frequently Asked Questions Section -->
  );
};

export default Featured;
