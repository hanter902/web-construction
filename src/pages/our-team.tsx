import MasterLayout from "./components/layout/MasterLayout";
import bgh from "../../public/img/banner-bre.jpg";
import { useEffect } from "react";
import CountUp from "react-countup";
import "animate.css";

const inlineStyle = {
  background: `url(${bgh.src})`,
  backgroundRepeat: "no-repeat !important",
  backgroundSize: "cover !important",
  // background: `linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(${bgh.src}) center center no-repeat`,
};
export default function OurTeam() {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);
  return (
    <MasterLayout>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header py-5 mb-5"
        style={inlineStyle}
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animate__animated animate__slideInDown ">
            Service
          </h1>
          <nav aria-label="breadcrumb animate__animated animate__slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div>
            <div className="vc_row wpb_row porto-inner-container">
              <div className="porto-wrap-container container">
                <div className="row">
                  <div
                    className="mx-md-auto vc_column_container col-md-9 animate__animated animate__fadeInUp"
                    data-appear-animation="maskUp"
                  >
                    <div className="wpb_wrapper vc_column-inner">
                      <h2
                        style={{
                          fontSize: "32px",
                          lineHeight: "46px",
                          textAlign: "center",
                          fontFamily: "Open Sans",
                          fontWeight: "700",
                          fontStyle: "normal",
                        }}
                        className="vc_custom_heading m-t-xxl mb-3"
                      >
                        We are Top End Tiling
                      </h2>
                      <div className="wpb_text_column wpb_content_element  text-center">
                        <div className="wpb_wrapper">
                          <p className="lead">
                            Has grown into a successful, thriving business over
                            last seven years. Specialising in all types of
                            tiling work in Auckland – North Island areas, and
                            also undertake amount of commercial &amp; insurance
                            work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vc_row wpb_row porto-inner-container">
              <div className="porto-wrap-container container">
                <div className="row">
                  <div className="vc_column_container col-md-12">
                    <div className="wpb_wrapper vc_column-inner">
                      <div className="vc_row wpb_row vc_inner row">
                        <div
                          className="vc_column_container col-md-4 animate__animated animate__fadeInLeft"
                          style={{ animationDelay: "800ms" }}
                          data-wow-delay="0.8s"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="porto-sicon-wrapper style_1">
                              <div className="porto-sicon-box left-icon">
                                <div className="porto-sicon-body">
                                  <div className="porto-sicon-header">
                                    <h3
                                      className="porto-sicon-title"
                                      style={{
                                        fontWeight: "700",
                                        fontSize: "16.8px",
                                      }}
                                    >
                                      QUALITY
                                    </h3>
                                  </div>
                                  <div className="porto-sicon-description ft-14">
                                    Whether it is in regards to an installation
                                    or our interactions with customers and
                                    partners, we want our name to always be
                                    synonymous with quality. As we grow, no
                                    decisions will be made that would sacrifice
                                    the quality that has become expected of our
                                    company.
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vc_column_container col-md-4 animate__animated animate__fadeIn"
                          style={{ animationDelay: "600ms" }}
                          data-wow-delay="0.6s"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="porto-sicon-wrapper style_1">
                              <div className="porto-sicon-box left-icon">
                                <div className="porto-sicon-body">
                                  <div className="porto-sicon-header">
                                    <h3
                                      className="porto-sicon-title"
                                      style={{
                                        fontWeight: "700",
                                        fontSize: "16.8px",
                                      }}
                                    >
                                      INTEGRITY
                                    </h3>
                                  </div>{" "}
                                  <div className="porto-sicon-description ft-14">
                                    We are committed to attract and develop high
                                    character people. We often find ourselves
                                    saying that employees “treat it as if it
                                    were their own business”. This attitude has
                                    flourished with all stuffs of our company
                                    and it has been key to our growth process.
                                    That attitude is essential as we continue to
                                    grow.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vc_column_container col-md-4 animate__animated animate__fadeInRight"
                          style={{ animationDelay: "800ms" }}
                          data-wow-delay="0.8s"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="porto-sicon-wrapper style_1">
                              <div className="porto-sicon-box left-icon">
                                <div className="porto-sicon-body">
                                  <div className="porto-sicon-header">
                                    <h3
                                      className="porto-sicon-title"
                                      style={{
                                        fontWeight: "700",
                                        fontSize: "16.8px",
                                      }}
                                    >
                                      EXCELLENCE
                                    </h3>
                                  </div>{" "}
                                  <div className="porto-sicon-description ft-14">
                                    We have built this company on the basis that
                                    we will exceed standard industry
                                    expectations. We are committed to constantly
                                    improve in every aspect of our business and
                                    to create value for our customer beyond
                                    simply&nbsp; installing tiles.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="vc_row wpb_row vc_inner row">
                        <div
                          className="vc_column_container col-md-4 animate__animated animate__fadeInLeft"
                          style={{ animationDelay: "800ms" }}
                          data-wow-delay="0.8s"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1564451308943">
                              <div className="wpb_wrapper">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="672"
                                    height="790"
                                    src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/about-1.jpg"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    sizes="(max-width: 672px) 100vw, 672px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vc_column_container col-md-4 animate__animated animate__fadeIn"
                          style={{ animationDelay: "600ms" }}
                          data-wow-delay="0.6s"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1564451315932">
                              <div className="wpb_wrapper">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="672"
                                    height="790"
                                    src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/about-2.jpg"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    sizes="(max-width: 672px) 100vw, 672px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="vc_column_container col-md-4 animate__animated animate__fadeInRight"
                          style={{ animationDelay: "800ms" }}
                          data-wow-delay="0.8s"
                        >
                          <div className="wpb_wrapper vc_column-inner">
                            <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1564451322587">
                              <div className="wpb_wrapper">
                                <div className="vc_single_image-wrapper   vc_box_border_grey">
                                  <img
                                    width="672"
                                    height="790"
                                    src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/about-3.jpg"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    decoding="async"
                                    loading="lazy"
                                    sizes="(max-width: 672px) 100vw, 672px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Service End --> */}

      {/* <!-- Count Start --> */}
      <div className="animate__animated animate__fadeIn animate__delay-0-1 py-5 background-services">
        <div className="container">
          <div className="row g-5">
            <div className="row g-4 mb-4 pb-2">
              <div
                className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-1"
                data-wow-delay="0.1s"
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  ></div>
                  <div className="ms-3" style={{ textAlign: "center" }}>
                    <i className="fa fa-users fa-2x text-white"></i>
                    <h2 className="text-white mb-1" data-toggle="counter-up">
                      <CountUp
                        start={0}
                        end={300}
                        duration={10}
                        suffix="+"
                        separator=","
                      />
                    </h2>
                    <p className="fw-medium mb-0 text-white">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-3"
                data-wow-delay="0.3s"
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  ></div>
                  <div className="ms-3" style={{ textAlign: "center" }}>
                    <i className="fa fa-check fa-2x text-white"></i>
                    <h2 className="text-white mb-1" data-toggle="counter-up">
                      <CountUp start={0} end={7} duration={5} separator="," />
                    </h2>
                    <p className="fw-medium mb-0 text-white">Projects Done</p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-1"
                data-wow-delay="0.1s"
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  ></div>
                  <div className="ms-3" style={{ textAlign: "center" }}>
                    <i className="fa fa-trophy fa-2x text-white"></i>
                    <h2 className="text-white mb-1" data-toggle="counter-up">
                      <CountUp start={0} end={100} duration={7} separator="," />
                    </h2>
                    <p className="fw-medium mb-0 text-white">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-3"
                data-wow-delay="0.3s"
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  ></div>
                  <div className="ms-3" style={{ textAlign: "center" }}>
                    <i className="fa fa-mug-hot fa-2x text-white"></i>
                    <h2 className="text-white mb-1" data-toggle="counter-up">
                      <CountUp start={0} end={352} duration={7} separator="," />
                    </h2>
                    <p className="fw-medium mb-0 text-white">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Count Start --> */}

      <div className="vc_row wpb_row p-t-xxl row-align-items-center section section-default mt-0 mb-0 section-no-borders porto-inner-container">
        <div className="porto-wrap-container container">
          <div className="row">
            <div className="pr-lg-5 mb-sm-5 mb-lg-0 vc_column_container col-md-12 col-lg-6">
              <div className="wpb_wrapper vc_column-inner">
                <h2 style={{ fontSize: "25px", lineHeight: "1" }} className="vc_custom_heading mb-3 align-left" >
                  Who <b>We Are</b>
                </h2>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p className="lead">
                      We are expert in Ceramics, porcelain, granite, marble
                      &amp; mosaic’s and we are happy to use new materials and
                      encourage new design ideas.
                    </p>
                    <p>
                      We specialise in tiling floors, conservatories, kitchens,
                      bathrooms, and shower rooms &amp; offer a plaster boarding
                      service to ensure a completely stunning look. If you have
                      a new property, or are undertaking a large refurbishment,
                      you deserve a tiling company which delivers excellence in
                      every area. A free quotation &amp; experienced advice
                      comes as standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8 offset-sm-5 mt-sm-5 pt-sm-5 vc_column_container col-md-6 offset-lg-2 col-lg-4 offset-md-4 position-relative">
              <div className="wpb_wrapper vc_column-inner">
                <div
                  className="wpb_single_image wpb_content_element vc_align_left vc_custom_1564451456580 position-absolute d-none d-sm-blockwow animate__animated animate__zoomIn"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="wpb_wrapper">
                    <div className="vc_single_image-wrapper vc_box_border_grey">
                      <img width="164" height="148" src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/about-46.jpg" className="vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div
                  className="wpb_single_image wpb_content_element vc_align_left vc_custom_1564451464144 position-absolute d-none d-sm-block wow animate__animated animate__zoomIn"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="wpb_wrapper">
                    <div className="vc_single_image-wrapper vc_box_border_grey">
                      <img width="212" height="186" src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/about-35.jpg" className="vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div
                  className="wpb_single_image wpb_content_element vc_align_left position-relative mb-0 wow animate__animated animate__zoomIn"
                  style={{ animationDelay: "600ms" }}
                >
                  <div className="wpb_wrapper">
                    <div className="vc_single_image-wrapper vc_box_border_grey">
                      <img width="318" height="288" src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/about-24.jpg" className="vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}
