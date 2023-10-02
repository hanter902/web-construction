import MasterLayout from "./components/layout/MasterLayout";
import "animate.css";
import React, { useEffect } from 'react';
import bgh from '../../public/img/banner-bre.jpg'
import CountUp from 'react-countup';

const inlineStyle = {
    background: `url(${bgh.src})`,
    backgroundRepeat: 'no-repeat !important',
    backgroundSize: 'cover !important'
};
export default function ContactUs() {
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
                  {/* <!-- Page Header Start --> */}
                  <div className="container-fluid page-header py-5 mb-5" style={inlineStyle}>
                    <div className="container py-5">
                        <h1 className="display-3 text-white mb-3 animate__animated animate__slideInDown ">Contact Us</h1>
                        <nav aria-label="breadcrumb animate__animated animate__slideInDown">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                

                 {/* <!--  Start --> */}
                <div className="page-content">
					<div className="vc_row wpb_row m-b-xl vc_custom_1656718017137 porto-inner-container">
                        <div className="porto-wrap-container container">
                            <div className="row">
                                <div className="vc_column_container col-md-6">
                                    <div className="wpb_wrapper vc_column-inner">
                                        <div className="wpcf7 js" id="wpcf7-f74-p73-o1" lang="en-US" dir="ltr">
                                            <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                                            <form action="/contact-top-end-tiling/#wpcf7-f74-p73-o1" method="post" className="wpcf7-form init" aria-label="Contact form" data-status="init">
                                                <div style={{display: 'none'}}>
                                                <input type="hidden" name="_wpcf7" value="74"/>
                                                <input type="hidden" name="_wpcf7_version" value="5.7.4"/>
                                                <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f74-p73-o1"/>
                                                <input type="hidden" name="_wpcf7_container_post" value="73"/>
                                                <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
                                                <input type="hidden" name="_wpcf7_recaptcha_response" />
                                                </div>
                                                <h2 className="short mb-2"><b>Contact</b> Us
                                                </h2>
                                                <p className="mb-5">Feel free to ask for details!
                                                </p>
                                                <div className="row form-row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <p><label htmlFor="contact-name" className="font-weight-bold text-dark">Your name *</label><br/>
                                                <span className="wpcf7-form-control-wrap" data-name="your-name"><input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="contact-name" aria-required="true" aria-invalid="false" value="" type="text" name="your-name"/></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <p><label htmlFor="contact-email" className="font-weight-bold text-dark">Your email address *</label><br/>
                                                <span className="wpcf7-form-control-wrap" data-name="your-email"><input className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" id="contact-email" aria-required="true" aria-invalid="false" value="" type="email" name="your-email"/></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <p><label htmlFor="contact-subject" className="font-weight-bold text-dark">Subject</label><br/>
                                                <span className="wpcf7-form-control-wrap" data-name="your-subject"><input className="wpcf7-form-control wpcf7-text form-control" id="contact-subject" aria-invalid="false" value="" type="text" name="your-subject"/></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <p><label htmlFor="contact-message" className="font-weight-bold text-dark">Your Message</label><br/>
                                                <span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea form-control" id="contact-message" aria-invalid="false" name="your-message"></textarea></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <p><input className="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn-modern" type="submit" value="Send Message"/><span className="wpcf7-spinner"></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-box-small vc_column_container col-md-6">
                                    <div className="wpb_wrapper vc_column-inner"><h4 className="vc_custom_heading align-left heading-dark">Our <strong>Office</strong></h4><div className="porto-sicon-wrapper style_1"><a className="porto-sicon-box-link" href="tel:+642108587909"><div className="porto-sicon-box default-icon"><div className="porto-sicon-default"><div id="porto-icon-446284599651adbebe63ad" className="porto-just-icon-wrapper  "><div className="align-icon" style={{textAlign:'center'}}>
                                        <div className="porto-icon advanced " style={{color:'#0088cc',borderStyle:'solid',borderColor:'#0088cc',borderWidth:'1px',width:'25px',height:'25px',lineHeight:'25px',borderRadius:'25px',fontSize:'12px',display:'inlineblock'}}>
                                            <i className="fa fa-phone"></i>
                                        </div></div></div></div><div className="porto-sicon-header"><p><strong>Phone</strong>: 021 0858 7909</p></div> </div></a></div><div className="porto-sicon-wrapper style_1"><a className="porto-sicon-box-link" href="mailto:info@topendtiling.co.nz" target="_blank"><div className="porto-sicon-box default-icon"><div className="porto-sicon-default"><div id="porto-icon-176845103651adbebe6925" className="porto-just-icon-wrapper  "><div className="align-icon" style={{textAlign:'center'}}>
                                        <div className="porto-icon advanced " style={{color:'#0088cc',borderStyle:'solid',borderColor:'#0088cc',borderWidth:'1px',width:'25px',height:'25px',lineHeight:'25px',borderRadius:'25px',fontSize:'12px',display:'inline-block'}}>
                                            <i className="fa fa-envelope"></i>
                                        </div></div></div></div><div className="porto-sicon-header"><p><strong>Email</strong>: info@topendtiling.co.nz</p></div> </div></a></div><h4 className="vc_custom_heading mt-5 align-left heading-dark">Business <strong>Hours</strong></h4><div className="porto-sicon-wrapper style_1"><div className="porto-sicon-box default-icon"><div className="porto-sicon-default"><div id="porto-icon-539687102651adbebe6f87" className="porto-just-icon-wrapper  "><div className="align-icon" style={{textAlign:'center'}}>
                                        <div className="porto-icon none " style={{color:'#333',fontSize:'14px',display:'inline-block'}}>
                                            <i className="far fa-clock"></i>
                                        </div></div></div></div><div className="porto-sicon-header"><p>Monday - Friday 9am to 5pm</p></div> </div></div><div className="porto-sicon-wrapper style_1"><div className="porto-sicon-box default-icon"><div className="porto-sicon-default"><div id="porto-icon-334601867651adbebe7351" className="porto-just-icon-wrapper  "><div className="align-icon" style={{textAlign:'center'}}>
                                        <div className="porto-icon none " style={{color:'#333',fontSize:'14px',display:'inline-block'}}>
                                            <i className="far fa-clock"></i>
                                        </div></div></div></div><div className="porto-sicon-header"><p>Saturday - 9am to 2pm</p></div> </div></div><div className="porto-sicon-wrapper style_1"><div className="porto-sicon-box default-icon"><div className="porto-sicon-default"><div id="porto-icon-1928200219651adbebe80d0" className="porto-just-icon-wrapper  "><div className="align-icon" style={{textAlign:'center'}}>
                                        <div className="porto-icon none " style={{color:'#333',fontSize:'14px',display:'inline-block'}}>
                                            <i className="far fa-clock"></i>
                                        </div></div></div></div><div className="porto-sicon-header"><p>Sunday - Closed</p></div> </div></div><h4 className="vc_custom_heading mt-5 align-left heading-dark">Get in <strong>touch</strong></h4>
                                        <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p className="lead font-size-lg">Top End Tiling has grown into a successful, thriving business over the last ten years. specialising in all types of tiling work in Auckland – North Island areas.</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="vc_row wpb_row call-to-action-in-footer vc_custom_1542186798701 vc_row-has-fill porto-inner-container">
                        <div className="porto-wrap-container container">
                            <div className="row">
                                <div className="vc_column_container col-md-12">
                                    <div className="wpb_wrapper vc_column-inner">
                                        <section className="vc_cta3-container">
                                            <div className="vc_general vc_cta3 mb-0 vc_cta3-style-flat vc_cta3-shape-square vc_cta3-align-center vc_cta3-color-white vc_cta3-icon-size-md vc_cta3-actions-right vc_custom_1583205019923">
                                                <div className="vc_cta3_content-container">
                                                    <div className="vc_cta3-content"><header className="vc_cta3-content-header"><h2>A Free Quotation &amp; Experienced Advice Comes As Standard.</h2></header><p>All Types Of Tiling Work In Auckland – North Island Areas</p>
                                                    </div>
                                                    <div className="vc_cta3-actions">
                                                        <div className="vc_btn3-container  btn-call-to-action vc_btn3-center show-arrow">
                                                            <a className="vc_btn3 vc_btn3-shape-default btn btn-lg btn-modern btn-dark" href="http://www.topendtiling.co.nz/top-end-tiling-quotation/" 
                                                            title="Quotation">Get Free Quotation</a>			
                                                            <span className="dir-arrow hlb appear-animation rotateInUpLeft appear-animation-visible" data-appear-animation-delay="800" data-appear-animation="rotateInUpLeft" style={{animationDelay: '800ms'}}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
				
                </div>
                              
                {/* <!--  End --> */}
            </MasterLayout>
        </div>
    )
}