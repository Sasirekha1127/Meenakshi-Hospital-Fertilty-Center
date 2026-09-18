import Layout from "../../../components/layout/Layout";
import MultiStepBooking from "../../../components/sections/appointment/MultiStepBooking";

export default function AppointmentPage() {
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Book Your Appointment">
        <MultiStepBooking />
      </Layout>
    </div>
  );
}
