import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";


const images = [
  "assets/images/clients/partner1.png",
  "assets/images/clients/partner2.png",
  "assets/images/clients/partner3.png",
  "assets/images/clients/partner4.png",
  "assets/images/clients/partner5.png",
  "assets/images/clients/partner6.png",
  "assets/images/clients/partner7.png",
  "assets/images/clients/partner8.png",
  "assets/images/clients/partner9.png",
  "assets/images/clients/partner10.png",
  "assets/images/clients/partner11.png",
  "assets/images/clients/partner12.png",
  "assets/images/clients/partner13.png",
  "assets/images/clients/partner14.png",

  
];

const sliderSettings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 150,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  infinite: true, // Ensures continuous loop
  centerMode: false, // Prevents extra spacing on the right
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
const Index = () => {
  // #f7931e orange
  // #7EA63F green
  return (
    <Layout header={1} footer={1}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
  {/*=== Hero Wrapper ===*/}
  <div className="hero-wrapper-one">
  {/* Background Video */}
  <div className="video-container">
    <video autoPlay loop muted playsInline className="hero-bg-video">
      <source src="/assets/videos/sanskarAyush.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Black Overlay */}
    <div className="video-overlay"></div>
  </div>

  <div className="container">
    <div className="row align-items-lg-center">
      <div className="col-xl-7 col-lg-12">
        {/*=== Hero Content ===*/}
        <div className="hero-co">
        <h1 
  className="wow fadeInUp text-shadow-custom responsive-text" 
  data-wow-delay=".4s" 
>
  Welcome to <span className="text-green-900">Sanskar Ayush Medicare</span>
</h1>
          <p className="wow fadeInDown text-white mt-4 lg:text-2xl" data-wow-delay=".6s">
            Get Ayurvedic Medicine with Your Brand Name
          </p>
          <div className="hero-button mb-30 wow fadeInUp mt-4 " data-wow-delay=".7s">
            <Link legacyBehavior href="/about">
              <a className="main-btn golden-btn mb-10 mr-3">Explore More</a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="main-btn filled-btn mb-10">How It Works</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-12">
        {/*=== Hero Image Box ===*/}
      </div>
    </div>
  </div>

  <style jsx>{`
    .hero-wrapper-one {
      position: relative;
      overflow: hidden;
    }

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .hero-bg-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.5; /* Adjust opacity as needed */
    }
      .text-shadow-custom {
    text-shadow: 3px 3px 6px rgba(255, 255, 255, 0.6); /* White shadow */
  }
    .responsive-text {
    font-size: 50px; /* Default size */
  }

  @media (max-width: 768px) {
    .responsive-text {
      font-size: 30px; /* Smaller font size on mobile */
    }
  }
  `}</style>
</div>


</section>
      {/*====== End Banner Section ======*/}


      {/*====== Start Features Section ======*/}
      <section className="features-section-two p-r z-1">
        {/*=== Features Wrapper ===*/}
        <div className="features-wrapper-two main-bg wow fadeInDown">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-two">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-three">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>

          {/*=== Counter Area ===*/}
          <div className="">
            <div className="row ">

              <div className="col-lg-6 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      
                    </div>
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Satisfactions Rate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      
                    </div>
                    <h2 className="number">
                      <Counter end={200} />+
                    </h2>
                    <p>Expert Team Member</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}

      {/*====== Start About Section  ======*/}
      <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/gallery-sankar/gl-5.png"
                  className="about-img-one h-52 w-52"
                  alt="About Image"
                />
                <img
                  src="assets/images/gallery-sankar/gl-1.png"
                  className="about-img-two h-96 w-96"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/tree.png"
                  className="about-img-three"
                  alt="About Image"
                />
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={14} />+
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    <span>
                    <img
                  src="assets/images/logo/logo.png"
                  className="logosmall"
                  alt="About Image"
                  style={{height: "30px", width:"30px"}}
                />
                    </span>
                    About Sanskar Ayush Medicare
                  </span>
                  <h2>We’re Always Provide Best Services</h2>
                </div>
                <p className="mb-30">
                We would like to introduce M/s Sanskar Ayush Medicare Pvt. Ltd. as an innovative contract manufacturer / Loan-License facility for your brand’s quality products with us. Established in 2010, the company has played a leading role in utilizing the theory and practice of Ayurveda with the tool of modern science to create world-class Ayurvedic products, Cosmetics, and Neutraceutical third-party manufacturing. The Company had established the plant with international standards with a GMP certificate & recognized by the government of Uttarakhand. We are committed to delivering the right product, at the right time, at the right price to our customers nationally & internationally. Navigate the Ayurvedic manufacturing landscape. Learn how to pick the ideal third-party manufacturer for Ayurvedic products.
                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    Quality Assurance
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Customer
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}

      {/*====== Start services Section ======*/}
            <section className="features-section mt-85">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title" style={{display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
}}>
                <span>
                    <img
                  src="assets/images/logo/logo.png"
                  alt="About Image"
                  style={{height: "30px", width:"30px"}}
                />
                    </span>
                  Services We Provide
                </span>
                <h2>Get Ayurvedic thrid party manufecturing with your Brand Name</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/home-service/sv-1.jpg"
                    alt="Image"
                    className="h-80"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                  <img
                    src="assets/images/icon/icon-5.png"
                    alt="Image"
                    className="p-2"
                    
                  />
                  </div>
                  <h5 className="title">Liquid Orals</h5>
                  <p>Liquid formulations for faster absorption.</p>

                  <div className="row gap-3 pl-3">
                    <p className="bg-gray-300 px-2 rounded-sm ">Syrups</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">suspensions</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">drops</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">medicated </p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Candies</p>

                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                <img
                    src="assets/images/home-service/sv-2.jpg"
                    alt="Image"
                    className="h-80"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                  <img
                    src="assets/images/icon/icon-6.png"
                    alt="Image"
                    className="p-2"
                    
                  />
                  </div>
                  <h5 className="title">Cosmetic Topicals </h5>
                  <p>External applications for skincare and hygiene.</p>
                  <div className="row gap-3 pl-3">
                    <p className="bg-gray-300 px-2 rounded-sm ">Creams</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">ointments</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">gels</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Balm</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Paste</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Shampoo</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Conditionar</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Lotion</p>
                    

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                <img
                    src="assets/images/home-service/sv-3.jpg"
                    alt="Image"
                    className="h-80"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                  <img
                    src="assets/images/icon/icon-7.png"
                    alt="Image"
                    className="p-2"
                    
                  />
                  </div>
                  <h5 className="title">Paste</h5>
                  <p>Sed perspiciatis unde omnis volunteer accusantium</p>
                  <div className="row gap-3 pl-3">
                    <p className="bg-gray-300 px-2 rounded-sm ">Avaleha</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">chyawanprash</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">therapeutic resins.</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                
                 <img
                 src="assets/images/home-service/sv-4.jpg"
                 alt="Image"
                 className="h-80"
               />
                </div>
                <div className="text">
                  <div className="icon">
                  <img
                    src="assets/images/icon/icon-8.png"
                    alt="Image"
                    className="p-2"
                    
                  />
                  </div>
                  <h5 className="title">Drops</h5>
                  <p>Specialized drops for targeted relief.</p>
                  <div className="row gap-3 pl-3">
                    <p className="bg-gray-300 px-2 rounded-sm ">Herbal</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">nasal</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">ear</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">eye </p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                <img
                    src="assets/images/home-service/sv-5.jpg"
                    alt="Image"
                    className="h-80"
                  />
                </div>
                <div className="text">
                  <div className=" icon ">

                     <img
                    src="assets/images/icon/icon-4.png"
                    alt="Image"
                    className="p-2"
                    
                  />
                  </div>
                  <h5 className="title">Solid Orals</h5>
                  <p>Effective oral formulations for daily health.</p>
                  <div className="row gap-3 pl-3">
                    <p className="bg-gray-300 px-2 rounded-sm ">Tablets</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Capsules</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Granules</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Powders</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Candies</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                <img
                    src="assets/images/home-service/sv-6.jpg"
                    alt="Image"
                    className="h-80"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                  <img
                    src="assets/images/icon/icon-9.png"
                    alt="Image"
                    className="p-2"
                    
                  />
                  </div>
                  <h5 className="title">Juices/Ras</h5>
                  <p>Herbal and medicated health beverages.</p>
                  <div className="row gap-3 pl-3">
                    <p className="bg-gray-300 px-2 rounded-sm ">Adrakh</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Amla</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Aloevera</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Karela</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Triphala</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Neem</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Giloy</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Jamun</p>
                    <p className="bg-gray-300 px-2 rounded-sm ">Flexible Customization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /><br /> <br /><br />
      {/*====== End services Section ======*/}

           {/*====== Start Gallery Section ======*/}
           <section className="gallery-section-minus p-r z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Section Title ======*/}
              <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                
                <span className="sub-title">
                <span>
                    <img
                  src="assets/images/logo/logo.png"
                  alt="About Image"
                  style={{height: "30px", width:"30px"}}
                />
                    </span>
                  Photo Gallery
                </span>
                <h2>Look Our Production From Insides</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Project Content Box ======*/}
              <div className="project-content-box mb-50 pl-lg-100 wow fadeInRight">
                <p className="mb-35">
                

Discover our gallery featuring high-quality products, advanced manufacturing processes, and a commitment to excellence. Explore images that highlight our expertise, innovation, and dedication to delivering the best solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.projectsSliderOne}
          className="projects-slider-one wow fadeInDown"
        >
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-1.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-2.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                  
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-3.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                 
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-4.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                 
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-13.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                 
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-6.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                 
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-7.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                 
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="assets/images/gallery-sankar/gl-8.png" alt="Gallery Image" />
              <div className="hover-content">
                <div className="text text-white">
                 
                  <a href="#">Sankar Ayush: Excellence in Gallery</a>
                </div>
                <Link legacyBehavior href="/project-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Gallery Section ======*/}


      {/*====== Start Why Choose us Section ======*/}
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <section className="working-process-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">
                <span>
                    <img
                  src="assets/images/logo/logo.png"
                  alt="About Image"
                  style={{height: "30px", width:"30px"}}
                />
                    </span>
                  Why Choose Us
                </span>
                <h2>Offering customized solutions for businesses and enterprises.</h2>
              </div>
            </div>
          </div>
          <div className="working-process-wrapper wow fadeInUp">
            <div className="row no-lg-gutters">
              {/*====== Working Process Wrapper ======*/}
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="icon">
                    <img
                    src="assets/images/icon/ch-us-1.png"
                    alt="Image"
                    className="p-3"
                    
                  />
                    </div>
                    <div className="text">
                      <h4 className="title">High-Quality Standards</h4>
                      <p>We ensure top-notch quality with advanced technology and stringent quality control measures.

</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                   
                    <div className="icon">
                    <img
                    src="assets/images/icon/ch-us-2.png"
                    alt="Image"
                    className="p-3"
                    
                  />
                    </div>
                    <div className="text">
                      <h4 className="title">Timely Delivery Service</h4>
                      <p>Reliable and efficient processes guarantee on-time delivery of your products.

</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    
                    <div className="icon">
                    <img
                    src="assets/images/icon/ch-us-3.png"
                    alt="Image"
                    className="p-3"
                    
                  />
                    </div>
                    <div className="text">
                      <h4 className="title">Customizable Manufacturing</h4>
                      <p>Tailored solutions to meet your unique product specifications and quantities.

</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    
                    <div className="icon">
                    <img
                    src="assets/images/icon/ch-us-4.png"
                    alt="Image"
                    className="p-3"
                    
                  />
                    </div>
                    <div className="text">
                      <h4 className="title">
                      Cost-Effective Solutions
                      </h4>
                      <p>Competitive pricing without compromising on quality, offering great value for your investment.

</p>
                      <img src="assets/images/line.png" alt="Line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Why Choose us Section ======*/}

      {/*====== Start Features Section ======*/}
      <section className="features-seciton pb-50">
        <div className="container">
          <div className="row align-items-xl-end">
            <div className="col-lg-6">
              {/*====== Features Image Box ======*/}
              <div className="features-image-box mb-50 wow fadeInLeft">
                <img
                  src="assets/images/features/home-1.png"
                  alt="Features Image"
                  className="h-2xl"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Features Content Box ======*/}
              <div className="features-content-box mb-50 wow fadeInRight">
                <div className="section-title mb-20">
                  <h2>Ready to Start Your Own Business.</h2>
                </div>
                <p className="mb-35">
                Choose Sankar Ayush Companies & be your own boss by taking the PCD
                franchise & third party manufacturing from the company.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Quality Assurance
                  </li>
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Dedicated Team Members
                  </li>
                  <li>
                    <i className="fal fa-long-arrow-right" />
                    Comprehensive Support
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}

      {/* === our clients  start*/}
      <section className="container text-center py-24 mx-auto">
      <div className="section-title mb-20">
                  <span className="sub-title">
                  <span>
                    <img
                  src="assets/images/logo/logo.png"
                  alt="About Image"
                  style={{height: "30px", width:"30px"}}
                />
                    </span>
                    Our Business Partners
                  </span>
                  <h2>Explore Our Network of Trusted Business Partners</h2>
                </div>
      <hr className="my-4 mx-auto w-3/4" />

      <Slider {...sliderSettings} className="customer-logos slider">
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Logo ${index}`} className="mx-autow-28 gap-4 " />
          </div>
        ))}
      </Slider>
      <hr className="my-4 mx-auto w-3/4" />

    </section>
    {/* our client end */}

    </Layout>
  );
};
export default Index;
