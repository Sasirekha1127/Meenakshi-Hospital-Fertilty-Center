import Layout from "../../../components/layout/Layout";
import Appointment from "../../../components/sections/home1/Appointment";

export default function AppointmentPage() {
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Booking Appointment">
        <Appointment />
      </Layout>
    </div>
  );
}
