import Layout from "../../components/layout/Layout";
import ScrollReveal from "../../components/common/ScrollReveal";
import Banner from "../../components/sections/home1/Banner";
import Chooseus from "../../components/sections/home1/Chooseus";
import DoctorSpotlight from "../../components/sections/home1/DoctorSpotlight";
import Contact_Info from "../../components/sections/home1/Contact_Info";
import Service from "../../components/sections/home1/Service";
import VideoSection from "../../components/sections/home1/VideoSection";
import PatientTestimonials from "../../components/sections/home1/PatientTestimonials";
import Faq from "../../components/sections/home1/Faq";
import GoogleMapSection from "../../components/sections/home1/GoogleMap";

export default function Home() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                {/* Above-the-fold banner renders immediately without delay or shift */}
                <Banner/>

                <ScrollReveal variant="fade-in" stagger>
                    <Chooseus/>
                </ScrollReveal>

                <ScrollReveal variant="fade-in">
                    <DoctorSpotlight/>
                </ScrollReveal>

                <ScrollReveal variant="fade-in" stagger>
                    <Contact_Info/>
                </ScrollReveal>

                <ScrollReveal variant="fade-in" stagger>
                    <Service/>
                </ScrollReveal>

                <ScrollReveal variant="scale-in">
                    <VideoSection/>
                </ScrollReveal>

                <ScrollReveal variant="fade-in" stagger>
                    <PatientTestimonials/>
                </ScrollReveal>

                <ScrollReveal variant="fade-up">
                    <Faq/>
                </ScrollReveal>

                <ScrollReveal variant="fade-in">
                    <GoogleMapSection/>
                </ScrollReveal>
            </Layout>
        </div>
    );
}
