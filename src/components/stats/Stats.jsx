import "./stats.scss";

const Stats = () => {
  return (
    <section id="stats-counter" class="stats-counter my-5">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4 align-items-center">
          <div class="col-lg-6">
            <img src="assets/img/stats-img.svg" alt="" class="img-fluid" />
          </div>

          <div class="col-lg-6">
            <div class="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="102"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>
                <strong>Happy Clients</strong> Our clients needs are a priority
              </p>
            </div>
            {/* <!-- End Stats Item --> */}

            <div class="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="121"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>
                <strong>Available</strong> Pure Water bags, Bottle water packs
                and dispenser water available
              </p>
            </div>
            {/* <!-- End Stats Item --> */}

            <div class="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="24"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>
                <strong>Hours Of Support</strong> We are ready to help and
                recieve your feedback
              </p>
            </div>
            {/* <!-- End Stats Item --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
