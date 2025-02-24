import Link from "next/link";
const Default = () => {
  return (
    <footer className="footer-area text-white main-bg" style={{backgroundColor:"black"}}>
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logo/logo-white.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                  Providing high-quality, customized solutions for businesses worldwide.
                  </p>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn filled-btn filled-white">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widget-content">
                  
                  <ul className="info-list">
                    <li>Khasra No. 673, Imlikhera,      Bhagwanpur by pass NH, Rookee, 247667,   Haridwar,   Uttarakhand, India </li>
                    <li>
                      <a href="bd@sanskarayush.in">bd@sanskarayush.in</a>
                    </li>
                    <li>
                      <a href="tel:+000(123)45688">+91 9193078685</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Quick Link</h4>
                <div className="widget-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#"> Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Our Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-experience-widget float-lg-right mb-40 wow fadeInDown">
                <div className="widget-content">
                  <div className="experience-box-two">
                    <h2 className="number">
                      <span className="count">14</span>+
                    </h2>
                    <h6>Years Of Experience</h6>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>Copy© 2025 Sanskar Ayush Medicare. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              <div className="copyright-nav float-lg-right">
                <ul>
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Default;
