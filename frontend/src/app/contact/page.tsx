import Layout from "../../../components/layout/Layout";
import ContactForm from "../../../components/elements/ContactForm";
import Image from "next/image";
import Link from "next/link";
import GoogleMapSection from "../../../components/sections/home1/GoogleMap";
export default function ContactPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <section className="contact-info-two centred">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-23.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Hospital Location</h3>
                                        <p>18/61, Sengodipuram, Dharmapuri - 636701, Tamil Nadu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-24.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Hospital Email</h3>
                                        <p><Link href="mailto:info@meenakshihospital.com">info@meenakshihospital.com</Link><br /><Link href="mailto:contact@meenakshihospital.com">contact@meenakshihospital.com</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-25.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>24/7 Helpline</h3>
                                        <p><Link href="tel:+919443224499">+91 94432 24499</Link><br /><Link href="tel:04342260344">04342 260344</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="contact-section sec-pad">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }}></div>
                    <div className="auto-container">
                        <div className="inner-box">
                            <h2>Send Us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </section>
                <GoogleMapSection />
            </Layout>
        </div>
    )
}
