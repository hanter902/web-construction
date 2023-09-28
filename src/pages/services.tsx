import MasterLayout from "./components/layout/MasterLayout";
import "animate.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
import bgh from '../../public/img/carousel-1.jpg'
import CountUp from 'react-countup';
const OwlCarousel2 = dynamic(() => import('@ntegral/react-owl-carousel'), {
    ssr: false,
});
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    loop: true,
    center: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    },
};
const inlineStyle = {
    background: `linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(${bgh.src}) center center no-repeat`,
};
export default function Services() {
    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wowjs') : null
    useEffect(() => {
        new WOW.WOW({
            live: true
        }).init();
    }, [])
    return (
        <div>
            <MasterLayout>
                {/* <!-- Spinner Start --> */}
                {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"> */}
                {/* <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status"> */}
                {/* <span className="sr-only">Loading...</span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <!-- Spinner End --> */}

                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header py-5 mb-5" style={inlineStyle}>
                    <div className="container py-5">
                        <h1 className="display-3 text-white mb-3 animate__animated animate__slideInDown ">Service</h1>
                        <nav aria-label="breadcrumb animate__animated animate__slideInDown">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


                {/* <!-- Service Start --> */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <h1 className="display-5 mb-5">Our Services</h1>
                        </div>
                        <div>
                            <div className="porto-u-main-heading"><h2 style={{ fontWeight: '700', fontSize: '32px', lineHeight: '42px' }}>Have a look at what we offer:</h2></div>
                            <div className="vc_row wpb_row porto-inner-container">
                                <div className="porto-wrap-container container">
                                    <div className="row">
                                        <div className="vc_column_container col-md-12 col-lg-10 col-12">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="wpb_text_column wpb_content_element  lead">
                                                    <div className="wpb_wrapper">
                                                        <p>Whether it is in regards to an installation or our interactions with customers and partners, we want our name to always be synonymous with quality. As we grow, no decisions will be made that would sacrifice the quality that has become expected of our company.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vc_column_container col-md-12 col-lg-2 col-12">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="vc_btn3-container vc_btn3-inline">
                                                <a className="vc_btn3 vc_btn3-shape-default btn btn-lg btn-modern btn-dark" href="http://www.topendtiling.co.nz/top-end-tiling-quotation/" title="Quotation">Get a Quote!</a>	</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="vc_row wpb_row mb-0 section-no-borders porto-inner-container">
                                <div className="porto-wrap-container container">
                                    <div className="row">
                                        <div className="vc_column_container col-md-12">
                                            <div className="wpb_wrapper vc_column-inner">
                                                <div className="wow animate__animated animate__fadeIn animate__delay-0-3 vc_row wpb_row vc_inner row align-items-center appear-animation appear-animation-visible" data-wow-delay="0.1s">
                                                    <div className="vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="wpb_single_image wpb_content_element vc_align_left mt-4 mb_1_5">
                                                                <div className="wpb_wrapper">
                                                                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                                                                        <img  src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/service-tiling.jpg" className="imgservice vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy"  />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="porto-u-heading" data-hspacer="no_spacer" data-halign="left" style={{ textAlign: 'left' }}>
                                                                <div className="porto-u-main-heading"><h2 style={{ marginBottom: '20px', fontSize: '25px' }}><b>Tiling</b></h2>
                                                                </div>
                                                                <div className="porto-u-sub-heading" style={{ fontSize: '16.8px', lineHeight: '26px' }}>We specialise in a wide range of tiling works from domestic through to commercial and work with ceramics, natural stone, porcelain and mosaics. The scope of works undertaken include:</div>
                                                            </div>
                                                            <div className="wpb_text_column wpb_content_element ">
                                                                <div className="wpb_wrapper">
                                                                    <ul>
                                                                        <li className="p1"><span className="s1">Bathrooms</span></li>
                                                                        <li className="p1"><span className="s1">Kitchens</span></li>
                                                                        <li className="p1"><span className="s1">Conservatories</span></li>
                                                                        <li className="p1"><span className="s1">Hallways</span></li>
                                                                        <li className="p1"><span className="s1">External Areas</span></li>
                                                                        <li className="p1"><span className="s1">Shops</span></li>
                                                                        <li className="p1"><span className="s1">Offices</span></li>
                                                                        <li className="p1"><span className="s1">Restaurants</span></li>
                                                                        <li className="p1"><span className="s1">Swimming Pools</span></li>
                                                                    </ul>
                                                                    <p className="p1"><span className="s1">We can provide a range of services from design advice and guidance, supply of tiles and materials or labour only and a price ourselves on liaising closely with our customers to achieve the finish required.</span></p>
                                                                    <p className="p1"><span className="s1">We pride ourselves on our expert knowledge of the industry and are happy to discuss your project with you no matter how small.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="porto-separator tall ">
                                                    <hr className="separator-line  align_center" />
                                                </div>

                                                <div className="wow animate__animated animate__fadeIn animate__delay-0-3 vc_row wpb_row vc_inner row align-items-center appear-animation fadeInLeft appear-animation-visible" data-wow-delay="0.1s">
                                                    <div className="order-md-2 vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="wpb_single_image wpb_content_element vc_align_left mt-4 mb_1_5">
                                                                <div className="wpb_wrapper">
                                                                    <div className="vc_single_image-wrapper   vc_box_border_grey"><img src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/service-2.jpg" className="imgservice vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" sizes="(max-width: 540px) 100vw, 540px" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="porto-u-heading" data-hspacer="no_spacer" data-halign="left" style={{ textAlign: 'left' }}>
                                                                <div className="porto-u-main-heading"><h2 style={{ marginBottom: '20px', fontSize: '25px' }}><b>Waterproofing</b></h2></div>
                                                                <div className="porto-u-sub-heading" style={{ fontSize: '16.8px', lineHeight: '26px' }}>
                                                                    <p className="p1"><span className="s1">We are certified in most commonly used waterproofing systems. </span><span className="s1">Professional Waterproofing Services in Auckland</span></p>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                            <div className="wpb_text_column wpb_content_element ">
                                                                <div className="wpb_wrapper">
                                                                    <p className="p1"><span className="s1">Top End Tiling NZ is a registered Author at the Auckland City Council for (PS3) producer statements on waterproofing B2/E3. This was achieved through our proven qualifications in construction and second generation knowledge in the tiling industry.</span></p>
                                                                    <p className="p1"><span className="s1">We are certified in most commonly used waterproofing systems, supplying the right paperwork for your final inspection the first time around.</span></p>
                                                                    <p className="p1"><span className="s1">WHAT THIS MEANS FOR YOU?</span></p>
                                                                    <p className="p1"><span className="s1">By using Top End Tiling LTD you will not be required to get a Council inspection for your internal waterproofing, so you save money and time!</span></p>
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
                            <div className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-1" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        
                                    </div>
                                    <div className="ms-3" style={{textAlign: 'center'}}>
                                    <i className="fa fa-users fa-2x text-white"></i>
                                        <h2 className="text-white mb-1" data-toggle="counter-up">
                                            <CountUp start={0} end={300} duration={10} suffix="+"  separator="," />
                                        </h2>
                                        <p className="fw-medium mb-0 text-white">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-3" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        
                                    </div>
                                    <div className="ms-3" style={{textAlign: 'center'}}>
                                        <i className="fa fa-check fa-2x text-white"></i>
                                        <h2 className="text-white mb-1" data-toggle="counter-up">
                                            <CountUp start={0} end={7} duration={5} separator="," />
                                        </h2>
                                        <p className="fw-medium mb-0 text-white">Projects Done</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-1" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        
                                    </div>
                                    <div className="ms-3" style={{textAlign: 'center'}}>
                                    <i className="fa fa-trophy fa-2x text-white"></i>
                                        <h2 className="text-white mb-1" data-toggle="counter-up">
                                            <CountUp start={0} end={100} duration={7} separator="," />
                                        </h2>
                                        <p className="fw-medium mb-0 text-white">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 wow animate__animated animate__fadeIn animate__delay-0-3" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        
                                    </div>
                                    <div className="ms-3" style={{textAlign: 'center'}}>
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


                {/* <!-- Service Start --> */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div>
                        <div className="vc_row wpb_row mb-0 section-no-borders porto-inner-container">
                                <div className="porto-wrap-container container">
                                    <div className="row">
                                        <div className="vc_column_container col-md-12">
                                            <div className="wpb_wrapper vc_column-inner">

                                                <div className="wow animate__animated animate__fadeIn animate__delay-0-3 vc_row wpb_row vc_inner row align-items-center appear-animation fadeInRight appear-animation-visible" data-wow-delay="0.1s">
                                                    <div className="vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="wpb_single_image wpb_content_element vc_align_left mt-4 mb_1_5">
                                                                <div className="wpb_wrapper">
                                                                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                                                                        <img src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/service-3.jpg" className="imgservice vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" sizes="(max-width: 540px) 100vw, 540px" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="porto-u-heading" data-hspacer="no_spacer" data-halign="left" style={{ textAlign: 'left' }}>
                                                                <div className="porto-u-main-heading"><h2 style={{ marginBottom: '20px', fontSize: '25px' }}><b>Sand and Cement Screeding </b></h2>
                                                                </div>
                                                                <div className="porto-u-sub-heading" style={{ fontSize: '16.8px', lineHeight: '26px' }}>We specialise in a wide range of tiling works from domestic through to commercial and work with ceramics, natural stone, porcelain and mosaics. The scope of works undertaken include:</div>
                                                            </div>
                                                            <div className="wpb_text_column wpb_content_element ">
                                                                <div className="wpb_wrapper">
                                                               
                                                                    <p className="p1"><span className="s1">At Top End Tiling LTD we install sand/cement screeds to floors & walls using quality materials to ensure our high standard of workmanship.</span></p>
                                                                    <p className="p1"><span className="s1">To enable our highly skilled staff to deliver the floor to a high standard, we use ready mixed materials from reputable suppliers. The materials are batched and mixed off site for quality control guaranteeing the correct design mix is supplied, ensuring a quality installation is delivered.</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="porto-separator tall ">
                                                    <hr className="separator-line  align_center" />
                                                </div>

                                                <div className="wow animate__animated animate__fadeIn animate__delay-0-3 vc_row wpb_row vc_inner row align-items-center appear-animation fadeInLeft appear-animation-visible" data-wow-delay="0.1s">
                                                    <div className="order-md-2 vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="wpb_single_image wpb_content_element vc_align_left mt-4 mb_1_5">
                                                                <div className="wpb_wrapper">
                                                                    <div className="vc_single_image-wrapper vc_box_border_grey"><img src="https://www.topendtiling.co.nz/wp-content/uploads/2019/07/service-4.jpg" className="imgservice vc_single_image-img attachment-full" alt="" decoding="async" loading="lazy" sizes="(max-width: 540px) 100vw, 540px" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vc_column_container col-md-6">
                                                        <div className="wpb_wrapper vc_column-inner">
                                                            <div className="porto-u-heading" data-hspacer="no_spacer" data-halign="left" style={{ textAlign: 'left' }}>
                                                                <div className="porto-u-main-heading"><h2 style={{ marginBottom: '20px', fontSize: '25px' }}><b>Deck Jacks</b></h2></div>
                                                                <div className="porto-u-sub-heading" style={{ fontSize: '16.8px', lineHeight: '26px' }}>
                                                                    <p className="p1"><span className="s1">If you are looking to get your deck or outdoor area tiled with deck jacks, Top End Tiling is the Auckland tiler for you. </span></p>
                                                                    <p className="p1"><span className="s1">The leaky home syndrome has stopped here! </span></p>
                                                                    <p className="p1"><span className="s1">The need to inspect waterproofing membranes after the completion of a project has become paramount nowadays. </span></p>
                                                                    <p className="p1"><span className="s1">Installing tiles, stone or pavers over a deck jack system allows the membrane underneath to flex and move freely. It has long been recognized that over time fixing tiles externally over timber substrates can be problematic. </span></p>
                                                                    <p className="p1"><span className="s1">Deck jacks are the solution to finish your modern project, giving you a level traffic able surface to the indoor and outdoor flow. </span></p>
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


                {/* <!-- Quote Start --> */}
                <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                    <div className="container quote px-lg-0">
                        <div className="row g-0 mx-lg-0">
                            <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute img-fluid w-100 h-100" src="/img/quote.jpg" style={{ objectFit: 'cover' }} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 quote-text py-5 wow animate__animated animate__fadeIn animate__delay-0.5s" data-wow-delay="0.5s">
                                <div className="p-lg-5 pe-lg-0">
                                    <div className="section-title text-start">
                                        <h1 className="display-5 mb-4">Free Quote</h1>
                                    </div>
                                    <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '55px' }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '55px' }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: '55px' }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select border-0" style={{ height: '55px' }}>
                                                    <option selected>Select A Service</option>
                                                    <option value="1">Service 1</option>
                                                    <option value="2">Service 2</option>
                                                    <option value="3">Service 3</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Quote End --> */}


                {/* <!-- Testimonial Start --> */}
                <div className="container-xxl py-5 wow animate__animated animate__fadeInUp animate__delay-0.1s" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="section-title text-center">
                            <h1 className="display-5 mb-5">Testimonial</h1>
                        </div>
                        <OwlCarousel2 className="testimonial-carousel owl-loaded owl-drag"  {...options} >
                            <div className="testimonial-item text-center">
                                <img className="img-fluid bg-light p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: '90px', height: '90px' }} />
                                <div className="testimonial-text text-center p-4">
                                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                    <h5 className="mb-1">Client Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="img-fluid bg-light p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: '90px', height: '90px' }} />

                                <div className="testimonial-text text-center p-4">
                                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                    <h5 className="mb-1">Client Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="img-fluid bg-light p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: '90px', height: '90px' }} />
                                <div className="testimonial-text text-center p-4">
                                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                    <h5 className="mb-1">Client Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                        </OwlCarousel2>
                    </div>
                </div>
                {/* <!-- Testimonial End --> */}
            </MasterLayout>
        </div>
    )
}