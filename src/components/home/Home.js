import React from "react";
import "./home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <div>
      {/* nav-bar-------------------------------------nav-bar */}
      <nav class="navbar navbar-expand-lg navbar navbar-dark">
        <div class="container-fluid  padding-l-10 padding-r-10">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-white nav-logo" href="/">
            Looooooook
          </a>
          <div
            class="collapse navbar-collapse ml-auto justify-content-end"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Menu2
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Menu3
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Menu4
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Menu5
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Menu6
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Sign In
                </a>
              </li>
            </ul>
            <button className="navbar-btn" type="submit">
              FREE REGISTER
            </button>
          </div>
        </div>
      </nav>
      {/* nav-bar-------------------------------------nav-bar */}
      {/* carousel-----------------------------------carousel */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            style={{ backgroundColor: "#0000" }}
            class="carousel-item active bg-dark"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-6 m-auto text-left pt-3">
                  <h2 class="text-light mb-4">
                    Find the perfect freelancer here
                  </h2>
                  <div class="input-group mb-4 w-100 text-left">
                    <input
                      class="slider-search-input"
                      type="tel"
                      placeholder="Serch any freelancer here here"
                    ></input>
                    <button class="slider-search-input-btn">Search</button>
                  </div>
                  <div>
                    <span class="text-light">Top search:</span>
                    <button class="slider-btn">Designer</button>
                    <button class="slider-btn">Developer</button>
                    <button class="slider-btn">Web Developer</button>
                    <button class="slider-btn">App Developer</button>
                  </div>
                </div>

                <div style={{ paddingTop: "80px" }} className="col-md-6">
                  <img
                    src="./img/Untitled design-2 1.png"
                    class="d-block w-100 img-fluid"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item bg-dark">
            <div class="container">
              <div class="row">
                <div class="col-md-6 m-auto text-left p-5">
                  <h2 class="text-light mb-2">I am Baghat Ram</h2>
                  <h5 class="text-light mb-3">Fullstack Developer</h5>
                  <img className="mb-4 text-light" src="./img/star.png"></img>
                  <br></br>
                  <button class="more-info-btn">MORE INFO</button>
                </div>

                <div style={{}} class="col-md-6">
                  <div class="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "320px" }}
                      src="./img/slider-2.png"
                      class="d-block img-fluid"
                      alt="..."
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* carousel-----------------------------------carousel */}
      {/* powerd-by---------------------------------section */}
      <div className="powerd-by">
        <h4 style={{ color: "#9C9C9C" }} class="text-center">
          Officially powered by GP Chowdary{" "}
          <span style={{ paddingLeft: "12px" }} class="text-dark">
            LOOOOK
          </span>
        </h4>
      </div>
      {/* powerd-by---------------------------------section */}
      {/* welcome-----------------------------------section */}
      <div class="container-fluid ">
        <div class="container">
          <div class="row mb-5 mt-5 p-5">
            <div class="col-12 mb-4">
              <h3 class="welcome-look">Welcome to Loooook</h3>
            </div>
            <div class="col-12 col-md-6">
              <article class="">
                We at Looook welcomes you to the website, Lorem ipsum about us,
                we are top industry experts lorem ipsum, if you are great
                developers or designers we will provide you, the all types of
                freelancers will be available here.
              </article>
              <article class="welcome-look-description" className="pt-4 pb-4">
                About Look bout us, we are top industry experts lorem ipsum, if
                you are great developers or designers we will provide you, the
                all types of freelancers will be available here. We at Looook
                welcomes you to the website, Lorem ipsum about us, we are top
                industry experts lorem ipsum, if you are great developers or
                designers we will provide you, the all types of freelancers will
                be available here.
              </article>
            </div>
            <div class=" col-12 col-md-6">
              <img
                style={{ verticalAlign: "center" }}
                className="img-fluid"
                src="./img/banner-image-2.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
            class="col-12 col-md-7"
          >
            <img
              style={{ width: "100%" }}
              src="./img/people-2591874_1280 2.png"
              alt=""
            ></img>
          </div>
          <div class="col-12 col-md-5 text-center">
            <div
              style={{ paddingLeft: "30px" }}
              class="row bg-dark pt-5 pb-4 h-100"
            >
              <h3 class="bg-dark text-start text-white mb-3">
                WHY JOIN LOOOK?
              </h3>
              <div class="d-flex">
                <div>
                  <img src="./img//Group 319.png" alt=""></img>
                </div>
                <div class=" text-light ms-3">Free lifetime registration</div>
              </div>
              <div class="d-flex">
                <div>
                  <img src="./img//Group 319.png" alt=""></img>
                </div>
                <div class=" text-light ms-3">
                  No hidden fees or extra charges
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <img src="./img//Group 319.png" alt=""></img>
                </div>
                <div class=" text-light ms-3">
                  Get your work done with top talent
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <img src="./img//Group 319.png" alt=""></img>
                </div>
                <div class=" text-light ms-3">Hassle free registration</div>
              </div>
              <div class="d-flex">
                <div>
                  <img src="./img//Group 319.png" alt=""></img>
                </div>
                <div class=" text-light ms-3">
                  Free chat with anyone, anything
                </div>
              </div>

              <div class="pt-4 text-start">
                <button type="button" class=" text-center free-join-btn ">
                  FREE JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* welcome-----------------------------------section */}
      {/* Explore the opportunities-----------------------section */}
      <div class="container p-4">
        <h3 class="welcome-look text-center pb-4">Explore the opportunities</h3>
        <div class="row">
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 326.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo One</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 327.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Two</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 328.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Three</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 329.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Four</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 330.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Five</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 331.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Six</div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 332.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Seven</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 333.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Eight</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 326.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Nine</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 327.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Ten</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2  p-3 text-center">
            <div>
              <img src="img/Group 328.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Eleven</div>
          </div>
          <div class="col-6 col-sm-4 col-md-2 p-3 text-center">
            <div>
              <img src="img/Group 329.png" alt=""></img>
            </div>
            <div class="fw-bold mt-2">Oppo Twelve</div>
          </div>
        </div>
      </div>
      {/* Explore the opportunities-----------------------section */}
      {/* find-right talent-----------------------------section */}
      <div className="p-4"></div>
      <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
        <div class="container bg-dark">
          <div class="row">
            <div class="col-md-6 text-start p-4">
              <div class="h-100 w-100 d-flex p-5 align-items-center">
                <div>
                  <h4 class="text-light pb-4">
                    Find the right talent for your <br></br> Business
                    successfull growing
                  </h4>
                  <button type="button" className="join-free-btn">
                    JOIN FREE NOW
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5 text-center m-auto">
              <img
                class="img-fluid"
                src="./img/Untitled design-3 1.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4"></div>
      {/* find-right talent-----------------------------section */}
      {/* get inspired----------------------------section */}
      <div className="get-inspired-container">
        <h4 className="pb-4">Get inspired with projects of our freelancers</h4>
        <Carousel responsive={responsive}>
          <div class="card" style={{ width: "16rem" }}>
            <img src="../img/carousel.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Raghavai Ram</h5>
              <p class="card-text">Art Designer</p>
              <div>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating2.png"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "16rem" }}>
            <img src="../img/carousel.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Raghavai Ram</h5>
              <p class="card-text">Art Designer</p>
              <div>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating2.png"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "16rem" }}>
            <img src="../img/carousel.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Raghavai Ram</h5>
              <p class="card-text">Art Designer</p>
              <div>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating2.png"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "16rem" }}>
            <img src="../img/carousel.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Raghavai Ram</h5>
              <p class="card-text">Art Designer</p>
              <div>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating2.png"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div class="card" style={{ width: "16rem" }}>
            <img src="../img/carousel.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Raghavai Ram</h5>
              <p class="card-text">Art Designer</p>
              <div>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating.png"
                  class="card-img-top"
                  alt="..."
                ></img>
                <img
                  style={{ width: "15px", marginRight: "5px" }}
                  src="../img/rating2.png"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="p-4"></div>
      {/* get inspired----------------------------section */}
      {/* about carousel-----------------------------section*/}
      <div className="p-3"></div>
      <div
        id="carouselExampleIndicators2"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            style={{ backgroundColor: "#0000" }}
            class="carousel-item active"
          >
            <div style={{ border: "1px solid black" }} class="container">
              <div class="row">
                <div
                  style={{ padding: "0px" }}
                  class="col-md-6 text-left h-100"
                >
                  <div
                    style={{
                      backgroundImage: "url('../img/banner-image-2.png')",
                      width: "100%",
                      height: "300px",
                      position: "relative",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,.5)",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-5">
                    <h4>Raghava Ram</h4>
                    <p>Fullstack Developer</p>
                    <p>
                      About Look bout us, we are top industry experts lorem
                      ipsum here. We at Looook welcomes you to the website,
                      Lorem ipsum about us, we are top industry experts lorem
                      ipsum, if you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#0000" }} class="carousel-item ">
            <div style={{ border: "1px solid black" }} class="container">
              <div class="row">
                <div
                  style={{ padding: "0px" }}
                  class="col-md-6 text-left h-100"
                >
                  <div
                    style={{
                      backgroundImage: "url('../img/banner-image-2.png')",
                      width: "100%",
                      height: "300px",
                      position: "relative",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,.5)",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-5">
                    <h4>Raghava Ram</h4>
                    <p>Fullstack Developer</p>
                    <p>
                      About Look bout us, we are top industry experts lorem
                      ipsum here. We at Looook welcomes you to the website,
                      Lorem ipsum about us, we are top industry experts lorem
                      ipsum, if you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
          <span
            style={{ backgroundColor: "black", borderRadius: "50%" }}
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
          <span
            style={{ backgroundColor: "black", borderRadius: "50%" }}
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="p-4"></div>
      {/* about carousel-----------------------------section*/}
      {/* categories------------------------------------section */}
      <div class="catagoris">
        <div style={{ backgroundColor: "#EAEAEA" }} class="mt-5 mb-3 p-5 pb-5">
          <div style={{paddingLeft:"5%",paddingRight:"5%"}} class="row">
            <div class="col-6 col-md-3 p-2 footer-list">
              <h4 class="pb-2">Categories</h4>
              <h6>Categories</h6>
              <h6>Graphics Design</h6>
              <h6>Digital Marketing</h6>
              <h6>Web Designing</h6>
              <h6>3D Animation</h6>
              <h6>Web Development</h6>
              <h6>Programming & Tect</h6>
              <h6>Database</h6>
            </div>
            <div class="col-6 col-md-3 p-2 footer-list ">
              <h4 class="pb-2">Sub-Categories</h4>
              <h6>Sub-Categories</h6>
              <h6>Graphics Design</h6>
              <h6>Digital Marketing</h6>
              <h6>Web Designing</h6>
              <h6>3D Animation</h6>
              <h6>Web Development</h6>
              <h6>Programming & Tect</h6>
              <h6>Database</h6>
            </div>
            <div class="col-6 col-md-3 p-2 footer-list ">
              <h4 class="pb-2">Company</h4>
              <h6>Company</h6>
              <h6>Graphics Design</h6>
              <h6>Digital Marketing</h6>
              <h6>Web Designing</h6>
              <h6>3D Animation</h6>
              <h6>Web Development</h6>
              <h6>Programming & Tect</h6>
              <h6>Database</h6>
            </div>
            <div class="col-6 col-md-3 p-2 footer-list">
              <h4 class="pb-2">Priovacy</h4>
              <h6>Privacy</h6>
              <h6>Graphics Design</h6>
              <h6>Digital Marketing</h6>
              <h6>Web Designing</h6>
              <h6>3D Animation</h6>
              <h6>Web Development</h6>
              <h6>Programming & Tect</h6>
              <h6>Database</h6>
            </div>
          </div>
        </div>
      </div>
      {/* categories------------------------------------section */}
      {/* footer------------------------------------------section */}
      <footer>
        <div class="container mb-3">
          <div
            class="text-start"
          >
            <div class="row justify-content-between align-items-center">
              <div className="col-md-8">
                <div class="d-flex align-items-center justify-content-start">
                  <h4>Loooook</h4>
                  <p
                    style={{
                      fontSize: "12px",
                      paddingTop: "15px",
                      paddingLeft: "10px",
                    }}
                  >
                    Copyrights all reserved by Looooooook - 2021
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <img className="h-100" src="./img/social-icon.png"></img>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer------------------------------------------section */}
    </div>
  );
}

export default Home;
