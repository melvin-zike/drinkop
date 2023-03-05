import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer" class="footer bg-success">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 footer-info">
            <a href="#" class="twitter">
              <img
                src="/assets/img/logop.png"
                style={{
                  width: "280px",
                  height: "300px",
                  position: "absolute",

                  left: "40px",
                }}
                class=""
              />
            </a>
            <p>Follow us on social media.</p>
            <div class="social-links d-flex mt-4">
              <a
                href="https://www.twitter.com/radulam_networks"
                class="twitter"
              >
                <i class="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/radulamnetworks"
                class="facebook"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/radulamnetworks"
                class="instagram"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/radulamnetworks"
                class="linkedin"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Gbagada <br />
              Mainland, Lagos
              <br />
              Nigeria <br />
              <br />
              <strong>Phone:</strong> 08149510410
              <br />
              <strong>Email:</strong> info@radulamnetworks.com.ng
              <br />
            </p>
          </div>
        </div>
      </div>

      <div class="container mt-4">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>radulamnetworks</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">&copy; 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
