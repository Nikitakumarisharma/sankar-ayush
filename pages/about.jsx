import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const About = () => {
  return (
    <Layout>
        {/*====== Start Banner Section ======*/}
        <section className="banner-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-one gray-bg">
          <div className="shape shape-one animate-float-y">
            <span>
              <img src="assets/images/hero/shape-1.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-three animate-float-x">
            <span>
              <img src="assets/images/hero/shape-3.png" alt="shape" />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-lg-center">
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Content ===*/}
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Green Environments Make You Happy and provide Oxygen
                  </h1>
                  <p className="wow fadeInDown" data-wow-delay=".6s">
                    We Provide Beautiful Gardening &amp; Landscaping
                  </p>
                  <div
                    className="hero-button mb-30 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link legacyBehavior href="/about">
                      <a className="main-btn golden-btn mb-10">Explore More</a>
                    </Link>
                    <Link legacyBehavior href="/">
                      <a className="main-btn filled-btn mb-10">How It Work</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Image Box ===*/}
                <div
                  className="hero-image-box d-xl-block d-none wow fadeInRight"
                  data-wow-delay=".75s"
                >
                  <img
                    src="assets/images/hero/hero-three_one.jpg"
                    alt="Hero Image"
                  />
                  <div className="shape hero-svg">
                    <svg
                      width={237}
                      height={569}
                      viewBox="0 0 237 569"
                      fill="none"
                    >
                      <path
                        d="M0.552583 568.307L1.99989 0.226473C1.99989 0.226473 237.025 -9.37181 236.276 284.731C235.527 578.834 0.552583 568.307 0.552583 568.307Z"
                        fill="#7EA63F"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      <section className="about-section pt-95 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  About Gardening
                </span>
                <h2>We Care Your Garden &amp; Landscaping</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-content-box mb-50 wow fadeInRight">
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium totam rem apeira eaque ipsa quae ab
                  eillo inventore veritatis et quasi architecto beatae vitae
                </p>
                <ul className="check-style-one mb-40">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience Gardening
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
                  </li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn secondary-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-3.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInDown">
                <img src="assets/images/about/about-4.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-5.jpg" alt="About Image" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/*====== About Wrapper ======*/}
              <div className="about-wrapper-two gray-bg mt-minus-110 p-r wow fadeInDown">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Mission</h3>
                        <p>
                          Sed persiciatis unde omnis esnatu volunteer
                          accusantium doloreue laudan totam
                        </p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item item-active text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-vision" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Vision</h3>
                        <p>
                          Sed persiciatis unde omnis esnatu volunteer
                          accusantium doloreue laudan totam
                        </p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-management" />
                      </div>
                      <div className="text">
                        <h3 className="title">Plan &amp; Goals</h3>
                        <p>
                          Sed persiciatis unde omnis esnatu volunteer
                          accusantium doloreue laudan totam
                        </p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">
                            Read More
                            <i className="fas fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-100">
        <div className="features-wrapper">
          <div
            className="features-bg bg_cover"
            style={{
              backgroundImage: "url(assets/images/bg/features-bg-1.jpg)",
            }}
          />
          <div className="features-bgc-content-box main-bg text-white wow fadeInRight">
            <div className="features-content-box">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInUp">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Modern Gardening
                </span>
                <h2>We Offers Landscape &amp; Tree Plantations</h2>
              </div>
              <p className="mb-40">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae abillo inventore veritatis quasi architecto beatae vitae
                dicta sunt explicabo emo enim ipsam voluptatem quia voluptas{" "}
              </p>
              <div className="single-features-item mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-pruning-shears" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Modern Gardening &amp; Expert Team</h5>
                  <p>
                    Quis autem velum reprehenderit voluptate velit essecy
                    molestiaey consequatur vel dolorem eum
                  </p>
                </div>
              </div>
              <div className="single-features-item mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gardening-1" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Tree Plantations &amp; Landscape</h5>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    dislike beguiled and demoralized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Member
                </span>
                <h2>Meet Our Expert Gardener</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInLeft">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Benjamin S. Hughes
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Michael K. Greenwalds
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInRight">
                <div className="member-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Joshua M. Miranda
                    </Link>
                  </h3>
                  <p>Junior Gardener</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start CTA Section  ======*/}
      <section
        className="cta-bg-section bg_cover pt-100 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Need a Expert
                  </span>
                  <h2>Looking For a Garden Specialist</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis isnatu volunteer accusantium
                  doloremque laudantium
                </p>
                <Link legacyBehavior href="/team">
                  <a className="main-btn golden-btn">Find Specialist</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Testimonials
                </span>
                <h2>Global Clients Feedback</h2>
              </div>
            </div>
          </div>
          {/*====== Testimonial Slider  ======*/}
          <Slider
            {...sliderProps.testimonialSliderOne}
            className="testimonial-slider-one wow fadeInUp"
          >
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-2.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-3.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Brian L. Swinton</h6>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Timothy V. Kim</h6>
                    <p className="position">SR Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
