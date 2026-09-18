"use client";

import Layout from "../../../components/layout/Layout";
import EmergencyServicesSection from "../../../components/sections/services/EmergencyServicesSection";
import OutpatientServicesSection from "../../../components/sections/services/OutpatientServicesSection";
import InpatientServicesSection from "../../../components/sections/services/InpatientServicesSection";
import HowCanWeAssistSection from "../../../components/sections/services/HowCanWeAssistSection";

export default function Departments_Page() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services & Specialities">
                {/* 1. 24/7 Emergency & Critical Care Section */}
                <EmergencyServicesSection />

                {/* 2. Outpatient Services Section (OPD & Daycare Clinics) */}
                <OutpatientServicesSection />

                {/* 3. Inpatient Services Section (IPD, Room Accommodation, OTs & Cashless TPA) */}
                <InpatientServicesSection />

                {/* 4. How Can We Assist You Today? (Fast-Track Healthcare Access Hub) */}
                <HowCanWeAssistSection />
            </Layout>
        </div>
    );
}
