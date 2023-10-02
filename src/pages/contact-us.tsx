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
                

                 {/* <!-- Input Start --> */}
            <div className="page-content">
					<div className="vc_row wpb_row m-b-xl vc_custom_1542188227814 porto-inner-container"><div className="porto-wrap-container container"><div className="row"><div className="vc_column_container col-md-12"><div className="wpb_wrapper vc_column-inner">
<div className="wpcf7 js" id="wpcf7-f2432-p75-o1" lang="en-US" dir="ltr">
<div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/top-end-tiling-quotation/#wpcf7-f2432-p75-o1" method="post" className="wpcf7-form init" aria-label="Contact form"  data-status="init">
<div style={{display: 'none'}}>
<input type="hidden" name="_wpcf7" value="2432"/>
<input type="hidden" name="_wpcf7_version" value="5.7.4"/>
<input type="hidden" name="_wpcf7_locale" value="en_US"/>
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f2432-p75-o1"/>
<input type="hidden" name="_wpcf7_container_post" value="75"/>
<input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
<input type="hidden" name="_wpcf7_recaptcha_response" value="03AFcWeA6OHyjN4r5Q3-nt_snFded8RBzQ4O-TwdJA07Otiwt04S2iAG2MGzWSa1hNxFxHn7lgYpsW69f7ZeyXI2bv3PLfw8_QlSqfpPqwbMjt8UL5wKuUaC2s2EDE4T3isBAWYMetoeVGPn56cqjt_w39ulkmyMuH3ho1DNmsLEDMmaDRcvdsKv0FtWgkQIB6rf0Vi7IKo8BLKUbLf-E4N5XjmtA0q_ZkoEsYHJWXqFTTuBoMu6GE9lfXAdM-n2HoloZBkk4Yd-swPY8Y6TwdiBHIU8joTpQCxPhtum5vhPBYIFCZvXSoroR68VFh8PEu4s32lZNa76tx0bU5aaqN6tV3GoBShSuZoFN9UOR7IvlaA3r_Ik7DunFU1p0D7fRCpCxgQs_dhZDoOpfCLunYwQF9kijE2d8lMlJ0jWC__FPocfpjl7hu_4Ylx_df-bylfsSYvxwv996Sid9nSjvh-EPYSoCVMCal9uYIpDo30CFlLQwMog3agA76XMeKmu27eHGuj68KstNnX5niQpFNanpZJuqj6Pju31gvCABlXYPuccnEcbs6gFw"/>
</div>
<h2 className="short mb-2"><b>Get A Free Quote</b>
</h2>
<p className="mb-5">A free quotation &amp; experienced advice comes as standard. For your enquiry please use the form below, or reach us through our contact page.
</p>
<div className="row form-row">
	<div className="col-lg-6">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Your name *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-name">
    <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="contact-name" aria-required="true" aria-invalid="false" value="" type="text" name="your-name"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-6">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Your email address *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-email">
    <input className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" id="contact-email" aria-required="true" aria-invalid="false" value="" type="email" name="your-email"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-6">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Your Phone *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-phone">
    <input className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" id="contact-phone" aria-required="true" aria-invalid="false" value="" type="tel" name="your-phone"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-6">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Best time to contact</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-time">
    <input className="wpcf7-form-control wpcf7-text form-control" id="contact-time" aria-invalid="false" value="" type="text" name="your-time"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-12">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Address</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-address">
    <input className="wpcf7-form-control wpcf7-text form-control" id="contact-address" aria-invalid="false" value="" type="text" name="your-address"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-12">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Areas to be tiled *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-areas">
    <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="contact-areas" aria-required="true" aria-invalid="false" value="" type="text" name="your-areas"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-12">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Property description *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-description"><textarea rows={10} className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control" id="contact-description" aria-required="true" aria-invalid="false" name="your-description"></textarea></span>
			</p>
		</div>
	</div>
	<div className="col-lg-12">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Expected deadline *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-deadline">
    <input className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="contact-deadline" aria-required="true" aria-invalid="false" value="" type="text" name="your-deadline"/></span>
			</p>
		</div>
	</div>
	<div className="col-lg-12">
		<div className="form-group">
			<p><label className="font-weight-bold text-dark">Extra comments *</label><br/>
<span className="wpcf7-form-control-wrap" data-name="your-comments"><textarea rows={10} className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control" id="contact-comments" aria-required="true" aria-invalid="false" name="your-comments"></textarea></span>
			</p>
		</div>
	</div>
<hr/>
	<div className="col-lg-12">
		<div className="form-group">
			<p>
                <input className="wpcf7-form-control has-spinner wpcf7-submit btn btn-primary btn-modern" type="submit" value="Submit quote"/><span className="wpcf7-spinner"></span>
			</p>
		</div>
	</div>
</div><div className="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
				</div>
                {/* <!-- Input End --> */}
            </MasterLayout>
        </div>
    )
}