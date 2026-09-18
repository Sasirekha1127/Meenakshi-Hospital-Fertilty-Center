"use client";
import Layout from "../../../components/layout/Layout";
import AboutHeroBanner from "../../../components/sections/about/AboutHeroBanner";
import AboutTeamShowcase from "../../../components/sections/about/AboutTeamShowcase";
import MissionVision from "../../../components/sections/about/MissionVision";
import YearOnYearTimeline from "../../../components/sections/about/YearOnYearTimeline";
import DirectorsSection from "../../../components/sections/about/DirectorsSection";
import AboutCounters from "../../../components/sections/about/AboutCounters";
import CelebrityTestimonials from "../../../components/sections/about/CelebrityTestimonials";

export default function About_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                {/* Hero Banner with left content and right doctor image */}
                <AboutHeroBanner />

                {/* Team photo showcase directly below banner */}
                <AboutTeamShowcase />

                {/* Our Mission and Vision Section */}
                <MissionVision />

                {/* 2021 to 2026 Year-on-Year Milestones & Growth */}
                <YearOnYearTimeline />

                {/* Board of Directors / Leadership Section */}
                <DirectorsSection />

                {/* Key Impact & Clinical Milestones Counters */}
                <AboutCounters />

                {/* Celebrity Testimonials & Trusted Patient Voices */}
                <CelebrityTestimonials />
            </Layout>
        </div>
    )
}
